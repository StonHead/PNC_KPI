package com.org.incedo.modules.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardListResponse {
    @Id
    private Integer dashId;
    private String dashName;
    private String dashTitle;
}
