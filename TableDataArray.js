import React, { useState } from 'react';
const TableDataArray = () => {
    const tableData = [
        {
            "ID": "1",
            "LastName": "Abdullah",
            "FirstName": "Muhammad",
            "City": "Lahore",
            "State": "Punjab",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "CS",
            "Country": "Pakistan",
        },
        {
            "ID": "2",
            "LastName": "DOE02",
            "FirstName": "JANE02",
            "City": "Sedona",
            "State": "Arizona",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Math",
            "Country": "US",
            "Age": "19",
            "SAT": "2006",
            "Grade ": "63",
            "Height": "64"
        },
        {
            "ID": "3",
            "LastName": "DOE01",
            "FirstName": "JOE01",
            "City": "Elmira",
            "State": "New York",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Math",
            "Country": "US",
            "Age": "26",
            "SAT": "2221",
            "Grade ": "78",
            "Height": "73"
        },
        {
            "ID": "4",
            "LastName": "DOE02",
            "FirstName": "JOE02",
            "City": "Lackawana",
            "State": "New York",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Econ",
            "Country": "US",
            "Age": "33",
            "SAT": "1716",
            "Grade ": "78",
            "Height": "68"
        },
        {
            "ID": "5",
            "LastName": "DOE03",
            "FirstName": "JOE03",
            "City": "Defiance",
            "State": "Ohio",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Econ",
            "Country": "US",
            "Age": "37",
            "SAT": "1701",
            "Grade ": "65",
            "Height": "71"
        },
        {
            "ID": "6",
            "LastName": "DOE04",
            "FirstName": "JOE04",
            "City": "Tel Aviv",
            "State": "Israel",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Econ",
            "Country": "Israel",
            "Age": "25",
            "SAT": "1786",
            "Grade ": "69",
            "Height": "67"
        },
        {
            "ID": "7",
            "LastName": "DOE05",
            "FirstName": "JOE05",
            "City": "Cimax",
            "State": "North Carolina",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Politics",
            "Country": "US",
            "Age": "39",
            "SAT": "1577",
            "Grade ": "96",
            "Height": "70"
        },
        {
            "ID": "8",
            "LastName": "DOE03",
            "FirstName": "JANE03",
            "City": "Liberal",
            "State": "Kansas",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Politics",
            "Country": "US",
            "Age": "21",
            "SAT": "1842",
            "Grade ": "87",
            "Height": "62"
        },
        {
            "ID": "9",
            "LastName": "DOE04",
            "FirstName": "JANE04",
            "City": "Montreal",
            "State": "Canada",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Math",
            "Country": "Canada",
            "Age": "18",
            "SAT": "1813",
            "Grade ": "91",
            "Height": "62"
        },
        {
            "ID": "10",
            "LastName": "DOE05",
            "FirstName": "JANE05",
            "City": "New York",
            "State": "New York",
            "Gender": "Female",
            "StudentStatus": "Graduate",
            "Major": "Math",
            "Country": "US",
            "Age": "33",
            "SAT": "2041",
            "Grade ": "71",
            "Height": "66"
        },
        {
            "ID": "11",
            "LastName": "DOE06",
            "FirstName": "JOE06",
            "City": "Hot Coffe",
            "State": "Mississippi",
            "Gender": "Male",
            "StudentStatus": "Undergraduate",
            "Major": "Econ",
            "Country": "US",
            "Age": "18",
            "SAT": "1787",
            "Grade ": "82",
            "Height": "67"
        },
        {
            "ID": "12",
            "LastName": "DOE06",
            "FirstName": "JANE06",
            "City": "Java",
            "State": "Virginia",
            "Gender": "Female",
            "StudentStatus": "Graduate",
            "Major": "Math",
            "Country": "US",
            "Age": "38",
            "SAT": "1513",
            "Grade ": "79",
            "Height": "59"
        },
        {
            "ID": "13",
            "LastName": "DOE07",
            "FirstName": "JOE07",
            "City": "Varna",
            "State": "Bulgaria",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Politics",
            "Country": "Bulgaria",
            "Age": "30",
            "SAT": "1637",
            "Grade ": "79",
            "Height": "63"
        },
        {
            "ID": "14",
            "LastName": "DOE08",
            "FirstName": "JOE08",
            "City": "Moscow",
            "State": "Russia",
            "Gender": "Male",
            "StudentStatus": "Graduate",
            "Major": "Politics",
            "Country": "Russia",
            "Age": "30",
            "SAT": "1512",
            "Grade ": "70",
            "Height": "75"
        },
        {
            "ID": "15",
            "LastName": "DOE07",
            "FirstName": "JANE07",
            "City": "Drunkard Creek",
            "State": "New York",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Math",
            "Country": "US",
            "Age": "21",
            "SAT": "1338",
            "Grade ": "82",
            "Height": "64"
        },
        {
            "ID": "16",
            "LastName": "DOE08",
            "FirstName": "JANE08",
            "City": "Mexican Hat",
            "State": "Utah",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Econ",
            "Country": "US",
            "Age": "18",
            "SAT": "1821",
            "Grade ": "80",
            "Height": "63"
        },
        {
            "ID": "17",
            "LastName": "DOE09",
            "FirstName": "JANE09",
            "City": "Amsterdam",
            "State": "Holland",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Math",
            "Country": "Holland",
            "Age": "19",
            "SAT": "1494",
            "Grade ": "75",
            "Height": "60"
        },
        {
            "ID": "18",
            "LastName": "DOE10",
            "FirstName": "JANE10",
            "City": "Mexico",
            "State": "Mexico",
            "Gender": "Female",
            "StudentStatus": "Graduate",
            "Major": "Politics",
            "Country": "Mexico",
            "Age": "31",
            "SAT": "2248",
            "Grade ": "95",
            "Height": "59"
        },
        {
            "ID": "19",
            "LastName": "DOE11",
            "FirstName": "JANE11",
            "City": "Caracas",
            "State": "Venezuela",
            "Gender": "Female",
            "StudentStatus": "Undergraduate",
            "Major": "Math",
            "Country": "Venezuela",
            "Age": "18",
            "SAT": ''
        }];
    const [data, setData] = useState(tableData);
    const [item, setItem] = useState(tableData);
    const deleteHandler = (id) => {
        const myNewArray = data.filter((curElem) => {
            return curElem.ID !== id;
        })

        setData(myNewArray);
        setItem({})
    }


    const viewHandler = (data) => {
        setItem(data);

    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> First Name</th>
                        <th>LastName</th>
                        <th>City</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.ID}</td>
                                    <td>{data.FirstName}</td>
                                    <td>{data.LastName}</td>
                                    <td>{data.City}</td>
                                    <td><button onClick={() => viewHandler(data)}>View</button></td>
                                    <td><button onClick={() => deleteHandler(data.ID)}>Delete</button></td>

                                </tr>
                            )
                        })
                    }</tbody>
            </table>
            <h2>Selected Data</h2>
            <table>
                <thead>

                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th>Major</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.ID}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.City}</td>
                        <td>{item.State}</td>
                        <td>{item.Gender}</td>
                        <td>{item.Country}</td>
                        <td>{item.Major}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default TableDataArray;