import facebookLogo from '/src/assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  Youtube: youtubeLogo,
};

const networkColors = {
  Facebook: 'bg-facebook-color',
  Twitter: 'bg-twitter-color',
  Instagram: 'bg-ig-gradient',
  Youtube: 'bg-youtube-color',
};

export const OverviewCard = ({
  user,
  audienceType,
  audience,
  network,
  isUp,
  today,
}) => {
  return (
    <article className="bg-card-purple-pale w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-gradient-to-br dark:from-[hsl(270,50%,8%)] dark:to-[hsl(260,40%,12%)] hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${networkColors[network]} h-[4px] mb-[8px]`}></div>
      <div className="flex items-center place-content-center gap-2">
        <img src={networkLogos[network]} alt={`Logo ${network}`} />

        <p className="text-xs text-dark-grayish-blue font-bold">{user}</p>
      </div>

      <p className="text-[56px] fond-bold text-very-dark-blue dark:text-white">
        {audience}
      </p>
      <p className="uppercase tracking-[5px] text-dark-grayish-blue text-xs mb-6">
        {audienceType}
      </p>
      <div className="flex items-center place-content-center gap-1 ">
        <img src={isUp ? iconUp : iconDown} alt="Flecha hacia arriba" />
        <p
          className={`text-xs font-bold ${
            isUp ? 'text-lime-green' : 'text-bright-red'
          }`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};

export const OverviewTodayCard = ({
  network,
  statusType,
  stats,
  porcentage,
  isUp,
}) => {
  return (
    <article className="bg-card-purple-pale w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] mb-[21px] cursor-pointer hover:brightness-95 dark:bg-dark-purple-deep hover:dark:brightness-125 dark:text-white">
      <div className="flex items-center justify-between">
        <p className="text-dark-grayish-blue">{statusType}</p>
        <img src={networkLogos[network]} alt="" />
      </div>
      <div className="flex justify-between">
        <p className="text-[42px] fond-bold text-very-dark-blue dark:text-white">
          {stats}
        </p>
        <div className="flex items-center place-content-center gap-1 ">
          <img src={isUp ? iconUp : iconDown} alt="Flecha hacia arriba" />
          <p
            className={`text-xs font-bold ${
              isUp ? 'text-lime-green' : 'text-bright-red'
            }`}
          >
            {porcentage} Today
          </p>
        </div>
      </div>
    </article>
  );
};
