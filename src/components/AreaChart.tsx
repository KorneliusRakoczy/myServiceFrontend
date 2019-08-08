import React from "react";
import Chart from "react-apexcharts";

type MyState = {
  options: any;
  series: any;
};
class AreaChart extends React.Component {
  state: MyState;

  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },

        xaxis: {
          type: "datetime",
          categories: [
            "2018-01-01T00:00:00",
            "2018-02-01T00:00:00",
            "2018-03-01T00:00:00",
            "2018-04-01T00:00:00",
            "2018-05-01T00:00:00",
            "2018-06-01T00:00:00",
            "2018-07-01T00:00:00",
            "2018-08-01T00:00:00",
            "2018-09-01T00:00:00",
            "2018-10-01T00:00:00",
            "2018-11-01T00:00:00",
            "2018-12-01T00:00:00"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          }
        }
      },
      series: [
        {
          name: "2018",
          data: [31, 40, 28, 51, 42, 80, 70, 31, 40, 28, 51, 42]
        },
        {
          name: "2019",
          data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34]
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="350"
          width="500"
        />
      </div>
    );
  }
}

export default AreaChart;
