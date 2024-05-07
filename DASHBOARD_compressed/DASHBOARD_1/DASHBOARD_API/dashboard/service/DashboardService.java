package com.org.incedo.modules.dashboard.service;

import com.org.incedo.exceptions.ResourceNotFoundException;
import com.org.incedo.modules.dashboard.dto.DashboardComponentsResponse;
import com.org.incedo.modules.dashboard.dto.DashboardListResponse;
import com.org.incedo.modules.dashboard.entity.DashboardMaster;
import com.org.incedo.modules.dashboard.repository.DashboardMasterRepository;
import com.org.incedo.modules.dashboard.repository.DashboardRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    private final DashboardMasterRepository dashboardMasterRepository;

    public DashboardService(DashboardRepository dashboardRepository, DashboardMasterRepository dashboardMasterRepository) {
        this.dashboardRepository = dashboardRepository;
        this.dashboardMasterRepository = dashboardMasterRepository;
    }

    public DashboardComponentsResponse getDashboardComponents(Integer dashId, Integer compId) {
        DashboardComponentsResponse dashboardComponentsResponse = dashboardRepository.findByDashIdAndCompId(dashId, compId);
        if(dashboardComponentsResponse == null){
            throw new ResourceNotFoundException("Data not found");
        }
        return dashboardComponentsResponse;
    }

    public List<DashboardListResponse> getDashboardList(){
        List<DashboardListResponse> dashboardListResponse = dashboardMasterRepository.findDashboardListResponses();
        if (dashboardListResponse.isEmpty()){
            throw new ResourceNotFoundException("Dashboard list is empty");
        }
        return dashboardListResponse;
    }

    public DashboardMaster getDashboardInfo(Integer dashId) {
        Optional<DashboardMaster> dashboardMaster = dashboardMasterRepository.findById(dashId);
        return dashboardMaster.orElseThrow(() -> new ResourceNotFoundException("Dashboard Info is empty"));

    }
}
