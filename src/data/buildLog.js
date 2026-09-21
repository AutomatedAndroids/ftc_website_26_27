// Add a new entry at the TOP of this array each time you want to log a day's work.
// date: 'YYYY-MM-DD', items: [{ who: 'Names', what: 'What they did.', photos: ['/log/filename.jpg'] }, ...]
// Photos go in public/log/ — photos is optional per item and can hold more than one.
export const buildLog = [
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
