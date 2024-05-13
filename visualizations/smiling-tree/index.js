import React from "react";
 
import { AreaChart, LineChart, PieChart , BarChart} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"> <h1> custom visualizer </h1>

<Grid>
    
<GridItem columnSpan={6}>
    <LineChart
            accountId={4438269}
            query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI2OXxJTkZSQXxOQXwzOTcxNDkwMTI2NDYwNzQ1NQ') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>

<GridItem columnSpan={6}>
    <BarChart
            accountId={4438269}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2OXxJTkZSQXxOQXwzOTcxNDkwMTI2NDYwNzQ1NQ') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<AreaChart
            accountId={4438269}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2OXxJTkZSQXxOQXwzOTcxNDkwMTI2NDYwNzQ1NQ') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<PieChart
          accountId={4438269}
          query="SELECT latest(cpuPercent) AS `CPU %`, latest(threadCount) AS `Threads` FROM ProcessSample WHERE (entityGuid = 'NDQzODI2OXxJTkZSQXxOQXwzOTcxNDkwMTI2NDYwNzQ1NQ') FACET processId, processDisplayName ORDER BY cpuPercent asc LIMIT 100 SINCE 30 minutes ago UNTIL now"
          fullWidth
          />
</GridItem>


</Grid>
 


   
    </div>
  );
};
 
export default index;