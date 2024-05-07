package com.org.incedo.modules.dashboard.service;

import com.org.incedo.TestHelper;
import com.org.incedo.exceptions.ResourceNotFoundException;
import com.org.incedo.modules.dashboard.dto.DashboardComponentsResponse;
import com.org.incedo.modules.dashboard.repository.DashboardRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;

@SpringBootTest
class DashboardServiceTest {
    @Autowired
    private DashboardService dashboardService;
    @MockBean
    private DashboardRepository dashboardRepository;

    @Test
    public void getDashboardComponentsReturnsOk() {
        DashboardComponentsResponse response = TestHelper.podam.manufacturePojo(DashboardComponentsResponse.class);
        when(dashboardRepository.findByDashIdAndCompId(anyInt(),anyInt()))
                .thenReturn(response);
        DashboardComponentsResponse dashboardComponentsResponse = dashboardService.getDashboardComponents(anyInt(),anyInt());
        assertNotNull(dashboardComponentsResponse);

    }
    @Test
    public void getDashboardComponentsReturnEmpty(){
        when(dashboardRepository.findByDashIdAndCompId(anyInt(),anyInt()))
                .thenReturn(null);
        ResourceNotFoundException ex = assertThrows(ResourceNotFoundException.class,()->dashboardService.getDashboardComponents(anyInt(),anyInt()));
        assertEquals("Data not found",ex.getMessage());
    }
    
}