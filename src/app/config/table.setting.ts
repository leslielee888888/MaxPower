import { CurrencyFormatComponent } from "../maxpower-table-column-component/currency-format/currency-format.component";
import { MaxpowerTableColumnComponentModule } from "../maxpower-table-column-component/maxpower-table-column-component.module";
import { MemberTableNameComponent } from "../maxpower-table-column-component/member-table-name/member-table-name.component";
import { ActivityFormatComponent } from "../maxpower-table-column-component/activity-format/activity-format.component";
import { DateFormatComponent } from "../maxpower-table-column-component/date-format/date-format.component";
import { StatusFormatComponent } from "../maxpower-table-column-component/status-format/status-format.component";

export const MaxpowerDashboardTableSettings = {
    hideSubHeader: true,
    columns: {
        contact_person: {
            title: 'Team Member',
            filter: false,
            sortDirection: 'desc',
            // type: 'custom',
            // renderComponent: DateRenderComponent,
        },
        total: {
            title: 'Application No.',
            filter: false,
            //type: 'custom',
            // renderComponent: FullNameRenderComponent,
        },
        total_settled: {
            title: 'Settled No.',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        commission: {
            title: 'You Share',
            filter: false,
            type: 'custom',
            renderComponent: CurrencyFormatComponent,
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerDashboardSubTableSettings = {
    hideSubHeader: true,
    columns: {
        contact_person: {
            title: 'Team Member',
            filter: false,
            sortDirection: 'desc',
            // type: 'custom',
            // renderComponent: DateRenderComponent,
            width: '150px'
        },
        total: {
            title: 'Application No.',
            filter: false,
            //type: 'custom',
            // renderComponent: FullNameRenderComponent,
            width: '150px'
        },
        total_settled: {
            title: 'Settled No.',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        commission: {
            title: 'You Share',
            filter: false,
            type: 'custom',
            renderComponent: CurrencyFormatComponent
        },
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerMemberTableSettings = {
    hideSubHeader: true,
    columns: {
        id: {
            title: 'Team Member',
            filter: false,
            sortDirection: 'desc',
            type: 'custom',
            renderComponent: MemberTableNameComponent
        },
        sign_up_date: {
            title: 'Date Sign-Up',
            filter: false,
            sortDirection: 'desc',
            type: 'custom',
            renderComponent: DateFormatComponent,
        },
        last_login_date: {
            title: 'Last Login',
            filter: false,
            type: 'custom',
            renderComponent: DateFormatComponent
        },
        submember_no: {
            title: 'Sub-member',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        submember_total: {
            title: 'Application No.',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        submember_settled: {
            title: 'Settled No.',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        submember_commission: {
            title: 'You Share',
            filter: false,
            type: 'custom',
            renderComponent: CurrencyFormatComponent,
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerDealsActivitiesTableSettings = {
    hideSubHeader: true,
    columns: {

        event_date: {
            title: 'Date',
            filter: false,
            sortDirection: 'desc',
            type: 'custom',
            renderComponent: DateFormatComponent,
        },
        last_login_date: {
            title: 'Activity',
            filter: false,
            type: 'custom',
            renderComponent: ActivityFormatComponent
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerPendingMemberTableSettings = {
    hideSubHeader: true,
    columns: {
        contact_person: {
            title: 'Member Name',
            filter: false,
            sortDirection: 'desc',
            /* type: 'custom',
            renderComponent: MemberTableNameComponent */
        },
        contact_number: {
            title: 'Contact Number',
            filter: false,
            sortDirection: 'desc',
        },
        company_name: {
            title: 'Company Name',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        email: {
            title: 'Email',
            filter: false,
        },
        ABN: {
            title: 'ABN',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        created_at: {
            title: 'Create Date',
            filter: false,
            type: 'custom',
            renderComponent: DateFormatComponent,
        },
        status: {
            title: 'Status',
            filter: false,
            type: 'custom',
            renderComponent: StatusFormatComponent,
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerPendingEarningsTableSettings = {
    hideSubHeader: true,
    columns: {
        ref_id: {
            title: 'Member Name',
            filter: false,
            sortDirection: 'desc',
            type: 'custom',
            renderComponent: MemberTableNameComponent,
        },
        ref_id1: {
            title: 'Sub-member',
            filter: false,
            sortDirection: 'desc',
            valuePrepareFunction: (cell, row) => {
                return row.ref_id
            }
        },
        app_id: {
            title: 'Deal ID',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        ReferrerFee: {
            title: 'Your Share',
            filter: false,
            type: 'custom',
            renderComponent: CurrencyFormatComponent,
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const MaxpowerReceivedEarningsTableSettings = {
    hideSubHeader: true,
    columns: {
        ref_id: {
            title: 'Member Name',
            filter: false,
            sortDirection: 'desc',
            type: 'custom',
            renderComponent: MemberTableNameComponent
        },
        ref_id1: {
            title: 'Sub-member',
            filter: false,
            sortDirection: 'desc',
            valuePrepareFunction: (cell, row) => {
                return row.ref_id
            }
        },
        app_id: {
            title: 'Deal ID',
            filter: false,
            // type: 'custom',
            // renderComponent: LoanAmountRenderComponent,
        },
        commission: {
            title: 'Your Share',
            filter: false,
            type: 'custom',
            renderComponent: CurrencyFormatComponent,
        },
        paid_date: {
            title: 'Date',
            filter: false,
            type: 'custom',
            renderComponent: DateFormatComponent,
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};