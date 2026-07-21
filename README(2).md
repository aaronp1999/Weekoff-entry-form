# Work Calendar UI

A simple and responsive **Work Calendar / Week-Off Configuration UI** built using **HTML, Tailwind CSS, and JavaScript**.

This project allows users to select weekly off-days, configure specific weeks of the month, and choose a half-working-day session.

## Features

- Responsive design for mobile, tablet, and desktop
- Select week-off days from Sunday to Saturday
- Select the 1st, 2nd, 3rd, 4th, or 5th week of each month
- Use the **All** checkbox to select every week for a day
- Enable the **Half working day & half weekend** option
- Choose either:
  - First Half Working
  - Second Half Working
- Save button with a success message
- Cancel button to reset the form
- Horizontal scrolling support on smaller screens

## Technologies Used

- HTML5
- Tailwind CSS through CDN
- JavaScript
- Custom CSS

## Project Structure

```text
work-calendar/
│
├── index.html      # Main user interface
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## How to Run the Project

1. Download or clone the project.
2. Keep `index.html` and `script.js` in the same folder.
3. Open `index.html` in any modern web browser.
4. No server or installation is required.

## How It Works

### Half-Day Option

When the **Half working day & half weekend** checkbox is selected, a dropdown appears.

The user can select:

- First Half Working
- Second Half Working

### Week Selection

Each day contains checkboxes for:

- All weeks
- 1st week
- 2nd week
- 3rd week
- 4th week
- 5th week

Selecting the **All** checkbox automatically selects all five weeks for that day.

### Save and Cancel

- **Save:** Displays a confirmation message.
- **Cancel:** Reloads the page and resets all changes.

