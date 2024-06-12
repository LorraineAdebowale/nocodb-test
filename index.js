import { Api } from "nocodb-sdk";
const api = new Api({
  baseURL: "http://nocodb.com",
  headers: {
    "xc-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU"
  }
})

api.dbViewRow.list(
  "noco",
  "ExternalDB",
  "Customer",
  "Customer", {
    "offset": 0,
    "limit": 25,
    "where": ""
}).then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.error(error);
});