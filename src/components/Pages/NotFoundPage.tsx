import GrinningPizzaX256 from '../../assets/grinning_pizzaX256.png';
import GrinningPizzaX128 from '../../assets/grinning_pizzaX128.png';

import GoBackButton from '../Generic/GoBackButton';

const NotFoundPage = () => {
  return (
    <main className="grid gap-8">
      <div className="relative">
        <p className="absolute text-[13rem] sm:text-[25rem] top-2/4 left-2/4 -translate-x-2/4  -translate-y-2/4 text-orange -z-10 opacity-60">
          404
        </p>

        <img
          srcSet={`${GrinningPizzaX128} 128w, ${GrinningPizzaX256} 256w`}
          sizes="(max-width: 638px) 128px,
          256px"
          alt="Grinning Pizza"
        />

        <div className="absolute w-max sm:left-2/4 left-[40%] bottom-2/4">
          <div className=" bg-surface w-full p-2 rounded">
            <p className="sm:text-2xl text-center">
              You pick the wrong page!
            </p>

            <p className="sm:text-2xl mt-2 text-center">
              Better for you to go back.
            </p>
          </div>
          <div className="arrow-down" />
        </div>
      </div>
      <GoBackButton />
    </main>
  );
};

export default NotFoundPage;
