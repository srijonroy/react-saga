import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance
        title={"Your Balance"}
        size={"small"}
        value={"2500.52"}
      ></DisplayBalance>

      <DisplayBalances />

      <MainHeader title={"History"} type={"h3"} />

      <EntryLine description={"income"} value={"10.00"} />
      <EntryLine description={"expense"} value={"10.00"} isExpense={true} />

      <MainHeader type={"h3"} title={"Add new transaction"} />
      <NewEntryForm />
    </Container>
  );
}

export default App;
