# SORC: React universal form
Universal independent form for react application.
It will be generate form from predefined PureComponents.
User must define model store and describe form view.
All styles must be reconfigurable for end-user needs.

# Components list (TODO):
## HorizontalLayout
Component for displaying components in horizontal direction

## VerticalLayout
Component for displaying components in vertical direction

## TextInput 
Component for edit text fields

## Stepper 
Component for edit numeric data

## TextBlock 
Component for display text data

## Select 
Component with predefined values

## AsyncSelect 
Component with async loading option (from React-Virtualized)

## Image 
Component for displaying image

## ActionsPane 
Component for displaying defined actions

### Action 
User defined action

### AsyncAction 
User defined async action

## TabPane 
Component for tab switch. Available tabs types

### ListComponent 
Component for displaying arrays in short format

### TableComponent 
Component for working with tables

## Form 
Main component for generating form by user provided model with metadata

```javascript
const myModel = {
 { propName: 'name', value: 'Bozhkov Alex', type: 'textInput' },
 { propName: 'user', value: 'test@mail.test', type: 'textInput' },
 { propName: 'count', value: 2, type: 'stepper' },
 { propName: 'client', value: SomeObject, type: 'reference', refProvider: Provider },
}
```

## Notes

Each component wrapped to ThemedComponent. If style and ThemeProvider not defined,
component will be using defaultThemeStyle. You not need to provide default styles in components.

## Setup
Please include `common.js` file from `dist` in main js file. Example for App entry point:
```javascript
// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import 'react-universal-form/dist/common';

import App from 'components/App';

//$FlowIssue
ReactDOM.render(<App />, document.getElementById('root'));
``` 