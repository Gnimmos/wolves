import React, { Component } from 'react'
import './table.css'




const columns = [
    {
      dataField: "wolf",
      text: "Choises",
      sort: true
    },
    {
      dataField: "says",
      text: "Your Answers",
      sort: true
    },
];



const defaultSorted = [
{
  dataField: "wolf",
  order: "desc"
}
];

class Table1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: [],
      columns:[],
      loading:false,
      error: null,
      results: [
        {
          _id: 1,
          firstname: "Robert",
          lastname: "Redfort",
          city: "New York",
          zip: 1233,
          street: "Mahn Street",
          street_number: "24A",
          favoriteKebab: "cow"
        },
        {
          _id: 2,
          firstname: "Patty",
          lastname: "Koulou",
          city: "Los Angeles",
          zip: 5654,
          street: "Av 5th Central",
          street_number: 12
        },
        {
          _id: 3,
          firstname: "Matt",
          lastname: "Michiolo",
          city: "Chicago",
          zip: 43452,
          street: "Saint Usk St",
          street_number: 65,
          phoneNumber: "0321454545"
        },
        {
          _id: 4,
          firstname: "Sonia",
          lastname: "Remontada",
          city: "Buenos Aires",
          zip: "43N95D",
          street: "Viva la Revolution Paso",
          street_number: 5446,
          country: "Argentina"
        }
      ]
    }
    this.getUsersData = this.getUsersData.bind(this)
  } 
   getUsersData(){
    // const res = await axios.get('http://localhost:5000/compares')
    // console.log(res.data)
    // const parsed = res.data.web
    // console.log(parsed);

    // if(!parsed){
    //   console.log("emply")
    // }
    // else{
    // this.setState({loading:true, users: parsed})
    // }
    // const request = new XMLHttpRequest();
    // request.open("GET", "http://localhost:5000/compares", true);
    // request.onload = function get() {
    //   const data = JSON.parse(this.response);
    //   console.log(data);

    //     this.setState({ msg: data , loading : true });
    //     console.log(this.users, this.loading);
    //  if(error){
    //   console.error(error);
    //  }
    // };

    // request.send();
    fetch('https://still-island-25722.herokuapp.com/wolf4')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          loading: true,
          msg: result
        }
        );
        
        console.log('This is your data', this.state.msg)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  componentDidMount(){
    this.getUsersData()
  }

 mappDynamicColumns = () => {
  let columns = [];
  this.state.msg.forEach((result) => {
    Object.keys(result).forEach((col) => {
      if (!columns.includes(col)) {
        columns.push(col);
      }
    });
    this.setState({ columns });
  });
};

addTableRow = (result) => {
  let row = [];
  console.log("results"+result)
  this.state.columns.forEach((col) => {
    if (!this.state.columnsToHide.includes(col)) {
      row.push(
        Object.keys(result).map((item) => {
          if (result[item] && item === col) {
            return result[item];
          } else if (item === col) {
            return "No Value";
          }
        })
      );
      row = this.filterDeepUndefinedValues(row);
    }
  });

  return row.map((item, index) => {
     console.log(item, "item ?");
    return (
      <td
        key={`${item}--${index}`}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        {item}
      </td>
    );
  });
};

mapTableColumns = () => {
  return this.state.columns.map((col) => {
    if (!this.state.columnsToHide.includes(col)) {
      const overridedColumnName = this.overrideColumnName(col);
      return (
        <th
          key={col}
          scope="col"
          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {overridedColumnName}
        </th>
      );
    }
  });
};

filterDeepUndefinedValues = (arr) => {
  return arr
    .map((val) =>
      val.map((deepVal) => deepVal).filter((deeperVal) => deeperVal)
    )
    .map((val) => {
      if (val.length < 1) {
        val = ["-"];
        return val;
      }
      return val;
    });
};

// if you want to change the text of the col you could do here in the .map() with another function that handle the display text

overrideColumnName = (colName) => {
  {    console.log('This is your data3', this.state.msg)
      }
  switch (colName) {
    case "phoneNumber":
      return "Phone number";
    case "lastname":
      return "Custom Last Name";
    default:
      return colName;
  }
};

createTable = (msg) => {
  return (
    
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>{this.mapTableColumns()}</tr>
      </thead>
      <tbody>
{      console.log(this.state.msg)}
        {msg.map((result, index) => {
          console.log(result+"i am in "+ index)

          return <tr key={result._wolf}>{this.addTableRow(result)}</tr>;
        })}
      </tbody>
    </table>
  );
};





  render() {
  const data = this.state.msg
    return (
      <div className="table">
        <h1>Your Responses: </h1>
       {data.map(el => (
        <tr>
          <td>{el.wolf}</td>
          <td>{el.says}</td>
        </tr>
      ))}
      </div>
    );
  
 }
}
export default Table1;
