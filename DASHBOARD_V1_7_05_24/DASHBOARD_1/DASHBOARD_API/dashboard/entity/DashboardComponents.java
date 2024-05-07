package com.org.incedo.modules.dashboard.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dashboard_components")
@Getter
@Setter
@ToString
public class DashboardComponents {
    @Id
    private Integer dashId;
    private Integer compId;
    private String compName;
    private String compType;
    private String compData;
    private String compDataQuery;
    private String compRow;
    private String compColSpan;
    private String displayOrder;
    private String isActive;
}
