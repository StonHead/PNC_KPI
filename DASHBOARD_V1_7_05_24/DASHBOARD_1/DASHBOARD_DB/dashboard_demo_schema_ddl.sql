//

DROP TABLE dashboard_demo_schema.component_master;

CREATE TABLE dashboard_demo_schema.component_master (
    comp_type_id number(10) NOT NULL,
    comp_type_name varchar2(1024),
    comp_desc varchar2(2048),
    html_template clob,
    data_template clob,
    is_active char(1) DEFAULT 'Y' NOT NULL
);

DROP TABLE dashboard_demo_schema.dashboard_master;

CREATE TABLE dashboard_demo_schema.dashboard_master (
    dash_id number(10) NOT NULL,
    dash_name varchar2(255),
    dash_title varchar2(1024),
    menu varchar2(1024),
    menu_group varchar2(255),
    is_active char(1) DEFAULT 'Y' NOT NULL,
    created_by varchar2(255),
    created_date timestamp,
    modified_by varchar2(255),
    modified_date timestamp
);

DROP TABLE dashboard_demo_schema.dashboard_components;

CREATE TABLE dashboard_demo_schema.dashboard_components (
    dash_id number(10) NOT NULL,
    comp_id number(10) NOT NULL,
    comp_name varchar2(255),
    comp_type varchar2(255),
    comp_data clob,
    comp_data_query clob,
    comp_parent varchar2(1024),
    comp_row varchar2(50),
    comp_col_span varchar2(50),
    display_order binary_double,
    is_active char(1) DEFAULT 'Y' NOT NULL
);
    