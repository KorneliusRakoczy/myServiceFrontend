import React from "react";
/*interface FormElements extends HTMLFormElement {
    hours: HTMLInputElement;
    credit: HTMLInputElement;
}*/
class CounterForm extends React.Component {
  render() {
    //return React.createElement('h1',null,'zkouška counteru');
    return (
      <form className="CounterForm">
        <table>
          <tr>
            <td align="left">Hodiny:</td>
            <td>
              <input name="hours" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Kredit:</td>
            <td>
              <input name="credits" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Publikace:</td>
            <td>
              <input name="pubs" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Videa:</td>
            <td>
              <input name="videos" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Opětovné návštěvy:</td>
            <td>
              <input name="rv" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Studia:</td>
            <td>
              <input name="studies" type="number" />
            </td>
          </tr>
          <tr>
            <td align="left">Komentář:</td>
            <td>
              <input name="comment" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="reset" value="ZRUŠIT" />
            </td>
            <td>
              <input type="submit" value="PŘIDAT" />
            </td>
          </tr>
        </table>
      </form>
    );
  }
}
export default CounterForm;
