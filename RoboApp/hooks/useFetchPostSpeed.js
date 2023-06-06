import { useEffect } from "react";

export const useFetchPostSpeed = ({url, value, method = "POST"}) => {

    useEffect(() => {
        
        const xmlhttp = new XMLHttpRequest();

        const data = "speed=" + value;

        xmlhttp.open(method, url, true);

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                console.log(xmlhttp.responseText);

            }
        };
        
        xmlhttp.send(data);

        return () => {

            xmlhttp.abort();

        };

    }, [url, value, method]);

}
