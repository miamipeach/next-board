export default function timeAPI(req, res) {
  const data = new Date();

  return res.status(200).json({
    data: `${data.getFullYear()}-${
      data.getMonth() + 1
    }-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}}`,
  });
}
