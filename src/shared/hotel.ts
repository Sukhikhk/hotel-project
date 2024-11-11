import { Entity, Fields } from "remult";




@Entity("hotels", { allowApiCrud: true })
export class Hotel {
    @Fields.number()
    code = null;
    @Fields.string()
    name = "";
    @Fields.string()
    description = "";
    @Fields.string()
    city = "";
    @Fields.string()
    address = "";
    @Fields.number()
    longitude = null;
    @Fields.number()
    latitude =null;
    @Fields.number()
    stars = null;
    @Fields.string()
    accommodation_type_code = "";
    @Fields.json()
    images = [];
    @Fields.json()
    hotel_issues = [];
    @Fields.json()
    facilities = [];
    @Fields.json()
    top_facilities = [];
    // "rooms" = [];
    @Fields.string()
    destination_code = "";
    @Fields.number()
    avg_min_price = null;
    @Fields.json()
    additional_info = {};
    @Fields.string()
    full_address = "";
    @Fields.number()
    primary_region_id = null;
    @Fields.number()
    dist_to_primary_region =null;
    @Fields.number()
    hp_hotel_id = null;
    @Fields.json()
    check_in_time_range = {};
    @Fields.json()
    check_out_time_range = {};
    @Fields.json()
    sortOrder = [];
    @Fields.json()
    sortOrderSummary = [];
    
    @Fields.string()
    garPropertyId = null;
    @Fields.string()
    hpPropertyId = null;

}

