package com.org.incedo.modules.dashboard.entity;

import com.org.incedo.modules.control_center.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dashboard_master")
@Getter
@Setter
@ToString
public class DashboardMaster extends BaseEntity {
    @Id
    private Integer dashId;
    private String dashName;
    private String dashTitle;
    private String menu;
    private String menuGroup;
    private String isActive;
}
