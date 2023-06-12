import { useEffect, useState } from "react"

export const useGetChartData = (url, method = "GET") => {

    const [chartData, setChartData] = useState();

    useEffect(() => {

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                const data = JSON.parse(this.responseText);

                const dataPoints = [];

                for (var i = 0; i < data.length; i++) {

                    dataPoints.push({ x: data[i].x, y: data[i].y });

                }

                setChartData(dataPoints)
            }
        };

        xhttp.open(method, url, true);

        xhttp.send();

        return () => {

            xhttp.abort();

        };

    }, [url])

    return chartData;
}