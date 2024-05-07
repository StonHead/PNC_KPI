package com.org.incedo.modules.dashboard.repository;

import com.org.incedo.modules.dashboard.dto.DashboardComponentsResponse;
import com.org.incedo.modules.dashboard.entity.DashboardComponents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DashboardRepository extends JpaRepository<DashboardComponents,Integer> {

    @Query("select new com.org.incedo.modules.dashboard.dto.DashboardComponentsResponse(dc.dashId,dc.compId,dc.compName,dc.compType,dc.compData,dc.compRow,dc.compColSpan,dc.displayOrder) "+
            "from DashboardComponents dc WHERE dc.dashId =:dashId AND dc.compId =:compId AND dc.isActive = 'Y'" )
    DashboardComponentsResponse findByDashIdAndCompId(Integer dashId, Integer compId);
}
