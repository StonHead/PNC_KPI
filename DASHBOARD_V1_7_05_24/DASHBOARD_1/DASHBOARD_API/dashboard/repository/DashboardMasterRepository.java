package com.org.incedo.modules.dashboard.repository;

import com.org.incedo.modules.dashboard.dto.DashboardListResponse;
import com.org.incedo.modules.dashboard.entity.DashboardMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DashboardMasterRepository extends JpaRepository<DashboardMaster,Integer> {
    @Query("select new com.org.incedo.modules.dashboard.dto.DashboardListResponse(dm.dashId,dm.dashName,dm.dashTitle) from DashboardMaster dm")
    List<DashboardListResponse> findDashboardListResponses();
}
