import React, { Component } from 'react';
import {Column} from 'primereact/components/column/Column';
import {DataTable} from 'primereact/components/datatable/DataTable';
import 'primereact/components/datatable/DataTable.css';



export default class NeighborTable extends Component {

    constructor() {
        super();
        this.state = {
          neighbors: [
            { nbr: 'neighbor1', enabled: true, owner: 'Fred' }
          ]
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <DataTable value={this.state.neighbors}>
                <Column field="nbr" header="Neighbor" />
                <Column field="enabled" header="Enabled" />
                <Column field="owner" header="Owner" />
            </DataTable>
        );
    }
};

