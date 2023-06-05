import { useEffect, useState } from "react"


export const useGetObstacle = (url) => {

    const [obstacleData, setObstacleData] = useState(null);
    useEffect(() => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                const data = JSON.parse(this.responseText);

                const lastObstacleData = data[data.length - 1];
                setObstacleData(lastObstacleData);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    }, [url]);
    return obstacleData;
}