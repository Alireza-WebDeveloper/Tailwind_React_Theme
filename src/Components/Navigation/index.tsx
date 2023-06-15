import ButtonLink from '../Ui/ButtonLink';

const Navigation = () => {
  return (
    <section className="flex flex-row space-x-4 items-center">
      <ButtonLink name="home" to="/" />
      <ButtonLink name="about" to="/" />
      <ButtonLink name="contact" to="/" />
    </section>
  );
};

export default Navigation;
