import os
import streamlit as st
import streamlit.components.v1 as components

_RELEASE = True

if _RELEASE:

    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _on_hover_tabs = components.declare_component(
        "on_hover_tabs",
        path = build_dir
    )

else:
    _on_hover_tabs = components.declare_component(
    "on_hover_tabs",
    url="http://localhost:3001"
    )

def on_hover_tabs(name, iconName, key=None):
    
    component_value = _on_hover_tabs(name=name, iconName=iconName, key=key, default='Option')
    
    return component_value

if not _RELEASE:
    st.subheader("Component that creates tabs corresponding with on hover sidebar")
    st.markdown('<style>' + open('./style.css').read() + '</style>', unsafe_allow_html=True) # Load the on hover side bar css file

    with st.sidebar:
        tabs = on_hover_tabs(name=['Dashboard', 'Money', 'Economy'], iconName=['dashboard', 'money', 'economy'], key="1") ## create tabs for on hover navigation bar
        
    if tabs =='Dashboard':
        st.title("Navigation Bar")
        st.write('Name of option is {}'.format(tabs))

    elif tabs == 'Money':
        st.title("Paper")
        st.write('Name of option is {}'.format(tabs))

    elif tabs == 'Economy':
        st.title("Tom")
        st.write('Name of option is {}'.format(tabs))
