import {Box} from "@mui/material";
import {DataGrid, GridToolbar, Toolbar} from '@mui/x-data-grid';
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import { useTheme } from "@mui/material";
import Headers from "../../components/Headers";

const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id" , headerName: "ID" , flex: 0.5},
        { field: "registrarId", headerName: "Registrar ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { field: "address", headerName: "Address", flex: 1},
        { field: "city", headerName: "City", flex: 1},
        { field: "zipCode", headerName: "ZipCode", flex: 1},
    ];

    return (
        <Box m="20px">
            <Headers title="CONTACTS"
                     subTitle="List of Contacts for Future Reference"
            />
            <Box m="40px 0 0 0" height="75vh"
                 sx={{
                     "& .MuiDataGrid-root":{
                         border: "none",
                     },
                     "& .MuiDataGrid-cell":{
                         borderBottom: "none"
                     },
                     "& .name-column-cell": {
                         color: colors.greenAccent[300]
                     },
                     "& .MuiDataGrid-columnHeaders": {
                         borderBottom: "none",
                         backgroundColor: colors.blueAccent[700],
                     },
                     "& .MuiDataGrid-virtualScroller": {
                         backgroundColor: colors.primary[400],
                     },
                     "& .MuiDataGrid-footerContainer": {
                         backgroundColor: colors.blueAccent[700],
                         borderTop: "none"
                     },
                     "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                         color: `${colors.grey[100]} !important`,
                     },
                 }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    showToolbar
                    components = {{

                        Toolbar: () => (
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <GridToolbar />
                            </div>
                        ),
                    }}
                />

                {/*<DataGrid*/}
                {/*    rows={mockDataContacts}*/}
                {/*    columns={columns}*/}
                {/*    showToolbar*/}
                {/*    slots={{ toolbar: Toolbar }}*/}
                {/*    slotProps={{*/}
                {/*        toolbar: {*/}
                {/*            showQuickFilter: true,                   // adds the search field*/}
                {/*            quickFilterProps: { debounceMs: 300 },*/}
                {/*            csvOptions: { fileName: 'contacts' },    // enables CSV export*/}
                {/*            printOptions: { disableToolbarButton: false }, // enables print*/}
                {/*            sx: {*/}
                {/*                // justifyContent: "flex-end",   // left*/}
                {/*                justifyContent: "center",    // center*/}
                {/*                // justifyContent: "flex-end",  // right*/}
                {/*            }*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>*/}

            </Box>
        </Box>
    )

}

export default Contacts;

