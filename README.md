# Zeotap-Task-1

# ZeoSheets - Google Sheets Clone
ZeoSheets is a web-based spreadsheet application that mimics Google Sheets, supporting data entry, formulas, mathematical operations, and essential data quality functions.

# Google Sheets Clone

## Overview
This project is a web application that mimics the core functionalities of **Google Sheets**. It includes a spreadsheet interface, mathematical functions, data quality functions, and additional features like saving/loading spreadsheets and data visualization.

---

## 🚀 Features

### 1. **Spreadsheet Interface**
- A 10x10 grid where users can input data into cells.
- Supports **text**, **numbers**, and **formulas**.
- Dynamic formula evaluation (e.g., `=SUM(A1:A3)`).

### 2. **Mathematical Functions**
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values.
- **PRODUCT**: Multiplies all numbers in a range.
- **STDEV**: Calculates the standard deviation of a range.
- **MEDIAN**: Finds the median of a range.

### 3. **Data Quality Functions**
- **TRIM**: Removes leading and trailing whitespace from cells.
- **UPPER**: Converts text to uppercase.
- **LOWER**: Converts text to lowercase.
- **REMOVE DUPLICATES**: Removes duplicate rows from the grid.
- **FIND AND REPLACE**: Finds and replaces specific text in the grid.

### 4. **Save and Load Functionality**
- Save the current spreadsheet to **local storage**.
- Load a previously saved spreadsheet from local storage.

### 5. **Data Visualization**
- Generate a **bar chart** to visualize the sum of values in each column.

---

## Tech Stack
- **Frontend**: React.js
- **Styling**: CSS
- **Charting**: Chart.js
- **State Management**: React Hooks (`useState`)

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.

### Steps to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd google-sheets-clone
   
2. **Install Dependencies**:
  ```bash
  npm install

3. **Run the Application**:
 ```bash
  npm start

4. **Open the Application**:
- The application will open in your browser at http://localhost:3000.

📝 License
This project is licensed under the MIT License.

Happy Coding! 🚀
