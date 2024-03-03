import logo from "./logo.svg";
import "./App.css";
import "./components/Item";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    {
      itemName: "Tide",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998",
    },
    {
      itemName: "Nirma2",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "200",
    },
    {
      itemName: "Tide 4",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "255",
    },
  ];

  return (
    <div>
    <Card>
      <Item name={response[0].itemName}>Hell jee Main hu aapki first Item</Item>
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      />

      <Item name={response[1].itemName}></Item>
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      />

      <Item name={response[2].itemName}></Item>
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      />

      <div className="App">Hello Jee</div>

      </Card>
    </div>
  );
}

export default App;
