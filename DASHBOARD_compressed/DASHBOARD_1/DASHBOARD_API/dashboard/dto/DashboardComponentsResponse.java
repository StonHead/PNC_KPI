package com.org.incedo.modules.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardComponentsResponse {
    private Integer dashId;
    private Integer compId;
    private String compName;
    private String compType;
    private String compData;
    private String compRow;
    private String compColSpan;
    private String displayOrder;

}
