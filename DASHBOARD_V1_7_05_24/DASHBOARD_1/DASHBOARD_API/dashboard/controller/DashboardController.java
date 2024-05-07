package com.org.incedo.modules.dashboard.controller;

import com.org.incedo.common.ApiResponse;
import com.org.incedo.modules.dashboard.dto.DashboardComponentsResponse;
import com.org.incedo.modules.dashboard.dto.DashboardListResponse;
import com.org.incedo.modules.dashboard.entity.DashboardMaster;
import com.org.incedo.modules.dashboard.service.DashboardService;
import io.swagger.annotations.Api;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/dashboard")
@RestController
@Api(tags = "dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/{dashId}/{compId}")
    public ApiResponse<DashboardComponentsResponse> getDashboardData(@PathVariable Integer dashId, @PathVariable Integer compId){
        DashboardComponentsResponse response = dashboardService.getDashboardComponents(dashId,compId);
        return ApiResponse.from(response,HttpStatus.OK);
    }
    @GetMapping("/dashboardList")
    public ApiResponse<List<DashboardListResponse>> getDashboardList(){
        List<DashboardListResponse> response = dashboardService.getDashboardList();
        return ApiResponse.from(response,HttpStatus.OK);
    }

    @GetMapping("/dashboardInfo/{dashId}")
    public ApiResponse<DashboardMaster> getDashboardInfo(@PathVariable Integer dashId){
        DashboardMaster response = dashboardService.getDashboardInfo(dashId);
        return ApiResponse.from(response,HttpStatus.OK);
    }


}
