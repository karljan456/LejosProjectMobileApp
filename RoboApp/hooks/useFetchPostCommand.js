import { useEffect } from "react"

export const useFetchPostCommand = ({ url, command, method = 'POST' }) => {

    useEffect(() => {

        const xmlhttp = new XMLHttpRequest();

        const data = "command=" + command;

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

    }, [url, command, method]);

}