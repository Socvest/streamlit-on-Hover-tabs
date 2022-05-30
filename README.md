# streamlit-on-Hover-tabs
Custom tabs for on hover streamlit navigation bar created by custom css

![demonstration-on-hover.gif](./img/demonstration-on-hover.gif)

on-hover-tabs is a component meant for a custom navigation bar like the above created via custom CSS. The CSS is also included in the repository. 
- Its possible to chose custom icons which is enabled via https://fonts.google.com/icons
- Plans to also adjust the sidebar via the python code is also in the works (like colour etc, but you can enter into the style css and do this yourself)

Its built on the [streamlit custom components typescript template](https://github.com/streamlit/component-template)

To install it:
```
pip install streamlit-on-Hover-tabs
```

**Variables**

- tabName: This is the name of the tab
- iconName: This is the name of the icon you wish to use in the sidebar
- styles: Borrowed an implementation from the wonderful [Victoryhb](https://github.com/victoryhb/streamlit-option-menu) implementation. It just has four html elements with css styles which you can adapt as you would if you were in a css file. It employs styles from glamor which allows for other implementations like hover, active etc as demonstrated below. Now you can create your own navigation bar and customize the tabs to meet the specs of your custom tab. 
    - 'navtab' which is the div container that contains the tabs
    - 'tabOptionsStyle' which is the span container that contains the icons and tabName
    - 'iconStyle' which is the icon tag that contains the icons
    - 'tabStyle' which is the list contains the tabName

You need to save the style.css file in your directory. Its located [here](https://github.com/Socvest/streamlit-on-Hover-tabs/tree/main/st_on_hover_tabs)

Examples:

```
from st_on_hover_tabs import on_hover_tabs
import streamlit as st
st.set_page_config(layout="wide")

st.header("Custom tab component for on-hover navigation bar")
st.markdown('<style>' + open('./style.css').read() + '</style>', unsafe_allow_html=True)


with st.sidebar:
    tabs = on_hover_tabs(tabName=['Dashboard', 'Money', 'Economy'], 
                         iconName=['dashboard', 'money', 'economy'], default_choice=0)

if tabs =='Dashboard':
    st.title("Navigation Bar")
    st.write('Name of option is {}'.format(tabs))

elif tabs == 'Money':
    st.title("Paper")
    st.write('Name of option is {}'.format(tabs))

elif tabs == 'Economy':
    st.title("Tom")
    st.write('Name of option is {}'.format(tabs))
    
```

To implement with styles:

(These are the current default CSS styles for the tabs)

```
with st.sidebar:
        tabs = on_hover_tabs(tabName=['Dashboard', 'Money', 'Economy'], 
                             iconName=['dashboard', 'money', 'economy'],
                             styles = {'navtab': {'background-color':'#111',
                                                  'color': '#818181',
                                                  'font-size': '18px',
                                                  'transition': '.3s',
                                                  'white-space': 'nowrap',
                                                  'text-transform': 'uppercase'},
                                       'tabOptionsStyle': {':hover :hover': {'color': 'red',
                                                                      'cursor': 'pointer'}},
                                       'iconStyle':{'position':'fixed',
                                                    'left':'7.5px',
                                                    'text-align': 'left'},
                                       'tabStyle' : {'list-style-type': 'none',
                                                     'margin-bottom': '30px',
                                                     'padding-left': '30px'}},
                             key="1")
```
