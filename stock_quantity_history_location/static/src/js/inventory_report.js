/** @odoo-module **/

import { session } from "@web/session";
import { InventoryReportListModel } from "@stock/views/list/inventory_report_list_model";

export class InventoryReportListModelExtended extends InventoryReportListModel {
    setup() {
        super.setup();
        this.multi_location = false;
    }

    async willStart() {
        await super.willStart();
        this.multi_location = await session.user_has_group("stock.group_stock_multi_locations");
    }
}

