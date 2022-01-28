import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title={"Income"}
              value={"1253.54"}
              color={"green"}
            ></DisplayBalance>
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title={"Expenses"}
              value={"1234.00"}
              color={"red"}
            ></DisplayBalance>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
