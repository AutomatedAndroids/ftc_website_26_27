// Add a new entry at the TOP of this array each time you want to log a day's work.
// date: 'YYYY-MM-DD', items: [{ who: 'Names', what: 'What they did.', photos: ['/log/filename.jpg'] }, ...]
// Photos go in public/log/ — photos is optional per item and can hold more than one.
export const buildLog = [
  {
    date: '2026-09-27',
    items: [
      {
        who: 'The team',
        what: 'Building 3 robots. First, a chassis robot where we can test code, the Limelight, and mobilization efficacy.',
        photos: ['/log/2026-09-27-chassis-bot.jpg'],
      },
      {
        who: 'Niels',
        what: 'Made a mold to cast silicone wheels for the final robot, used to get the right compression for the wheels.',
        photos: ['/log/2026-09-27-cast-wheels.jpg'],
      },
      {
        who: 'The team',
        what: 'Second, the prototype robot, which holds all of our tested final components and will serve as the final robot.',
        photos: ['/log/2026-09-27-final-bot.jpg'],
      },
      {
        who: 'The team',
        what: "Third, last year's starter bot, which we are taking apart for spare parts.",
        photos: ['/log/2026-09-27-old-bot.jpg'],
      },
    ],
  },
  {
    date: '2026-09-20',
    items: [
      {
        who: 'Josh and Ryan',
        what: 'Built a ball launcher using rubber bands and the 3D printer.',
        photos: ['/log/2026-09-20-launcher.jpg'],
      },
      {
        who: 'Leran, Andrew, Jeremy, and Ethan',
        what: "Built the base chassis, then started designing the robot's wheels in CAD.",
        photos: ['/log/2026-09-20-chassis.jpg', '/log/2026-09-20-cad-wheel.jpg'],
      },
    ],
  },
]
