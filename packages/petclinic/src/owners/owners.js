import React from "react";
import { connect } from "react-redux";

import { ownerSearchStateMapper } from "./owner-events";
import { ownerSearchDispatcher } from "./owner-events";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import i18n from "i18n-lite";

import "./owners.scss";

export const OwnerSearchComponent = props=> {
    console.log("OwnerSearch=" + Object.keys(props));
    return <div className="form-horizontal">
        <div className="form-group">
            <div className="control-group" id="lastName">
                <label className="col-sm-2 control-label">{i18n.t("TEXT__LAST_NAME")}</label>
                <div className="col-sm-10">
                    <input className="form-control" size="30" onBlur={(e) => props.searchTextChanged(e.target.value ) }
                        maxLength="80" name="lastName" defaultValue={props.search.searchText}/> <span className="help-inline" ></span>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-default" onClick={()=>props.submitSearch(props.search.searchText)}>Find Owner</button>
            </div>
        </div>
    </div>;
};

const OwnerSearch = connect(ownerSearchStateMapper, ownerSearchDispatcher)(OwnerSearchComponent);

export default () => {
    return <div>
        <Navbar selected="owners" />
        <div className="owners container xd-container">
            <h1>{i18n.t("TEXT__OWNERS_GREETING")}</h1>
            <OwnerSearch />
        </div>
        <Footer/>
    </div>;
};
