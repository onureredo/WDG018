const Services = () => {
  const date = new Date();

  const weekday = date.getDay();

  let isWeekend = true;
  if (weekday === 0 || weekday == 6) {
    isWeekend = true;
  }
  console.log(isWeekend);

  return (
    <section>
      <h2>Sercives</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis aperiam, eligendi aliquid, quibusdam
      fugit, accusamus possimus natus exercitationem minima placeat magnam iste ducimus tempore ea enim nisi molestias
      recusandae!
      {/* {isWeekend && <p>🌻</p>}
      {!isWeekend && <p>💻</p>} */}
      {isWeekend ? <p>🌻</p> : <p>💻</p>}
    </section>
  );
};

export default Services;
