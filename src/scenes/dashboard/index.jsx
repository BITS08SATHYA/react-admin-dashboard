import Headers from "../../components/Headers";
import {Box} from "@mui/material";
import TankPumpDiagram from "../tanknozzle/TankNozzle";

const Dashboard = () => {
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
        <Headers title="Dashboard"
        subTitle="Welcome to your Dashboard"
        />
        {/*<TankPumpDiagram />*/}
    </Box>
}

export default Dashboard;