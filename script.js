.clock-day:before {
  content: var(--timer-day);
}

.clock-date:before {
  content: var(--timer-date);
}

.clock-hours:before {
  content: var(--timer-hours);
}

.clock-minutes:before {
  content: var(--timer-minutes);
}

.clock-seconds:before {
  content: var(--timer-seconds);
}

body {
  background: linear-gradient(45deg, #1870ed 0, #f18f88 100%);
  font-family: 'Montserrat', 'sans-serif';
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock-container {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #080808;
  border-radius: 5px;
  padding: 60px 20px;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.15), 0 15px 90px 30px rgba(0, 0, 0, 0.25);
  display: flex;
}

.clock-col {
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
  min-width: 90px;
  position: relative;
}

.clock-col:not(:last-child):before,
.clock-col:not(:last-child):after {
  content: "";
  background-color: rgba(255, 255, 255, 0.3);
  height: 5px;
  width: 5px;
  border-radius: 50%;
  display: block;
  position: absolute;
  right: -42px;
}

.clock-col:not(:last-child):before {
  top: 35%;
}

.clock-col:not(:last-child):after {
  top: 50%;
}

.clock-timer:before {
  color: #fff;
  font-size: 4.2rem;
  text-transform: uppercase;
}

.clock-label {
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 10px;
}

@media (max-width: 825px) {
  .clock-container {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .clock-col + .clock-col {
    margin-top: 20px;
  }



  .clock-col:not(:last-child):before,
  .clock-col:not(:last-child):after {
    display: none !important;
  }
}
