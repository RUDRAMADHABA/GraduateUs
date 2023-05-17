
import Navbar from "../layout/Interncompo/Navbar"
import { Box, Button, Divider, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";



export default function Cgpa() {

  var subjects = {
    'CSE': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'DS': '3' },
        { 'Maths': '4' },
        { 'OOP': '3' },
        { 'DE': '3' },
        { 'EE': '3' },
        { 'DE Lab': '1.5' },
        { 'DS Lab': '1.5' },
        { 'OOP Lab': '1.5' },
        { 'Prog Lab': '1.5' }
      ],
      '4': [
        { 'CO': '3' },
        { 'DAA': '4' },
        { 'TOC': '3' },
        { 'GT': '3' },
        { 'OB': '3' },
        { 'CO Lab': '1.5' },
        { 'DAA Lab': '1.5' },
        { 'Comp Lab 1': '1.5' },
        { 'Comp Lab 2': '1.5' }
      ],
      '5': [
        { 'OS': '3' },
        { 'CA': '3' },
        { 'DBMS': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'OS Lab': '1.5' },
        { 'PE Lab': '1.5' },
        { 'DBMS Lab': '1.5' },
      ],
      '6': [
        { 'CN': '3' },
        { 'SE': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'CN Lab': '1.5' },
        { 'SE Lab': '1.5' },
        { 'PE Lab 2': '1.5' },
      ],
      '7': [
        { 'AI': '3' },
        { 'IWP': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'WP Lab': '1.5' },
        { 'SoI': '1.5' },
      ],
    },
    'Civil': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'MoM': '3' },
        { 'Maths': '4' },
        { 'CEMC': '3' },
        { 'ESE': '3' },
        { 'OB': '3' },
        { 'Conc Lab': '1.5' },
        { 'ES Lab': '1.5' },
        { 'EED Lab': '1.5' },
        { 'CACE Lab': '1.5' }
      ],
      '4': [
        { 'SA-1': '3' },
        { 'SaG': '4' },
        { 'GE-1': '3' },
        { 'FM': '3' },
        { 'EE': '3' },
        { 'SP Lab': '1.5' },
        { 'BD Lab': '1.5' },
        { 'GE Lab': '1.5' },
        { 'FM Lab': '1.5' }
      ],
      '5': [
        { 'RCD': '3' },
        { 'FD': '3' },
        { 'GE-2': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'SE Lab': '1.5' },
        { 'DCS Lab': '1.5' },
        { 'FF Lab': '1.5' },
      ],
      '6': [
        { 'TE-1': '3' },
        { 'SS': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'DHS Lab': '1.5' },
        { 'TE Lab': '1.5' },
        { 'DSS Lab': '1.5' },
      ],
      '7': [
        { 'SA-2': '3' },
        { 'TE-2': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'TGED Lab': '1.5' },
        { 'SoI': '1.5' },
      ],
    },
    'CE': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'FM': '3' },
        { 'Maths': '4' },
        { 'CPC': '3' },
        { 'CPT': '3' },
        { 'EE': '3' },
        { 'FT Lab': '1.5' },
        { 'FM Lab': '1.5' },
        { 'PT Lab': '1.5' },
        { 'EE Lab': '1.5' }
      ],
      '4': [
        { 'FAC': '3' },
        { 'Maths': '4' },
        { 'MO': '3' },
        { 'CET': '3' },
        { 'OB': '3' },
        { 'FT Lab': '1.5' },
        { 'FM Lab': '1.5' },
        { 'MO Lab': '1.5' },
        { 'CET Lab': '1.5' }
      ],
      '5': [
        { 'HT': '3' },
        { 'MT-1': '3' },
        { 'CRE-1': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'HT Lab': '1.5' },
        { 'MT Lab': '1.5' },
        { 'CRE Lab': '1.5' }
      ],
      '6': [
        { 'PDC': '3' },
        { 'MT-2': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'CAD Lab': '1.5' },
        { 'PC Lab': '1.5' },
        { 'PED Lab': '1.5' }
      ],
      '7': [
        { 'PSM': '3' },
        { 'PRE': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'PS Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'EE': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'EM': '3' },
        { 'Maths': '4' },
        { 'NT': '3' },
        { 'ADE': '3' },
        { 'OB': '3' },
        { 'EM Lab': '1.5' },
        { 'NT Lab': '1.5' },
        { 'ADE Lab': '3' }
      ],
      '4': [
        { 'EM': '3' },
        { 'Maths': '4' },
        { 'MI': '3' },
        { 'SaS': '3' },
        { 'EE': '3' },
        { 'EM Lab': '3' },
        { 'SaS Lab': '1.5' },
        { 'MI Lab': '1.5' }
      ],
      '5': [
        { 'PS-1': '3' },
        { 'PE': '3' },
        { 'CS-1': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'CS Lab': '1.5' },
        { 'PE Lab': '1.5' },
        { 'MaM Lab': '1.5' }
      ],
      '6': [
        { 'PS-2': '3' },
        { 'CSE': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'SaS Lab': '1.5' },
        { 'CS Lab': '1.5' },
        { 'CAE Lab': '1.5' }
      ],
      '7': [
        { 'PS-3': '3' },
        { 'HVE': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'PS Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'EEE': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'EM': '3' },
        { 'Maths': '4' },
        { 'NT': '3' },
        { 'ADE': '3' },
        { 'OB': '3' },
        { 'EM Lab': '1.5' },
        { 'NT Lab': '1.5' },
        { 'ADE Lab': '3' }
      ],
      '4': [
        { 'EM': '3' },
        { 'Maths': '4' },
        { 'MI': '3' },
        { 'SaS': '3' },
        { 'EE': '3' },
        { 'EM Lab': '3' },
        { 'SaS Lab': '1.5' },
        { 'MI Lab': '1.5' }
      ],
      '5': [
        { 'PS-1': '3' },
        { 'PE': '3' },
        { 'CS-1': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'CS Lab': '1.5' },
        { 'PE Lab': '1.5' },
        { 'MaM Lab': '1.5' }
      ],
      '6': [
        { 'PS-2': '3' },
        { 'CSE': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'SaS Lab': '1.5' },
        { 'CS Lab': '1.5' },
        { 'CAE Lab': '1.5' }
      ],
      '7': [
        { 'PS-3': '3' },
        { 'HVE': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'PS Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'IT': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'DS': '3' },
        { 'Maths': '4' },
        { 'OOP': '3' },
        { 'DE': '3' },
        { 'EE': '3' },
        { 'DE Lab': '1.5' },
        { 'DS Lab': '1.5' },
        { 'OOP Lab': '1.5' },
        { 'Prog Lab': '1.5' }
      ],
      '4': [
        { 'DCCN': '3' },
        { 'DBE': '4' },
        { 'COE': '3' },
        { 'DM': '3' },
        { 'OB': '3' },
        { 'DBE Lab': '1.5' },
        { 'DCCN Lab': '1.5' },
        { 'OOP Lab': '1.5' },
        { 'CO Lab': '1.5' }
      ],
      '5': [
        { 'OS': '3' },
        { 'WT': '3' },
        { 'DAA': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'OS Lab': '1.5' },
        { 'WT Lab': '1.5' },
        { 'DAA Lab': '1.5' }
      ],
      '6': [
        { 'CD': '3' },
        { 'SE': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'CD Lab': '1.5' },
        { 'SE Lab': '1.5' },
        { 'PE Lab': '1.5' }
      ],
      '7': [
        { 'AI': '3' },
        { 'CS': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'AI Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'ETC': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'NT': '3' },
        { 'Maths': '4' },
        { 'AEC': '3' },
        { 'SaS': '3' },
        { 'OB': '3' },
        { 'AEC Lab': '1.5' },
        { 'NT Lab': '1.5' },
        { 'SaS Lab': '1.5' },
        { 'Sim Lab': '1.5' }
      ],
      '4': [
        { 'PADC': '3' },
        { 'DSD': '4' },
        { 'AEC': '3' },
        { 'ETL': '3' },
        { 'EE': '3' },
        { 'AEC Lab': '1.5' },
        { 'DSD Lab': '1.5' },
        { 'ADC Lab': '1.5' },
        { 'DT Lab': '1.5' }
      ],
      '5': [
        { 'MaM': '3' },
        { 'ICS': '3' },
        { 'DSP': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'MaM Lab': '1.5' },
        { 'ICS Lab': '1.5' },
        { 'DSP Lab': '1.5' }
      ],
      '6': [
        { 'ME': '3' },
        { 'WMC': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'ME Lab': '1.5' },
        { 'Sim Lab': '1.5' },
        { 'Inst Lab': '1.5' }
      ],
      '7': [
        { 'WPAE': '3' },
        { 'CCN': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'AC Lab': '1.5' },
        { 'SoI': '1.5' }
      ],
    },
    'ME': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'MoS': '3' },
        { 'Maths': '4' },
        { 'MST': '3' },
        { 'BT': '3' },
        { 'EE': '3' },
        { 'MT Lab': '1.5' },
        { 'MD Lab': '1.5' },
        { 'Workshop': '1.5' },
        { 'TEF Lab': '1.5' }
      ],
      '4': [
        { 'MoS': '3' },
        { 'Maths': '4' },
        { 'MST': '3' },
        { 'BT': '3' },
        { 'EE': '3' },
        { 'MT Lab': '1.5' },
        { 'MD Lab': '1.5' },
        { 'Workshop': '1.5' },
        { 'TEF Lab': '1.5' }
      ],
      '5': [
        { 'MD': '3' },
        { 'MST': '3' },
        { 'FDHM': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'MD Lab': '1.5' },
        { 'MCMF Lab': '1.5' },
        { 'HM Lab': '1.5' }
      ],
      '6': [
        { 'MD': '3' },
        { 'HT': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'APTE Lab': '1.5' },
        { 'MD Lab': '1.5' },
        { 'PDPT Lab': '1.5' }
      ],
      '7': [
        { 'AMS': '3' },
        { 'RAC': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'HTRAC Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'MME': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'MTK': '3' },
        { 'Maths': '4' },
        { 'IPM': '3' },
        { 'TP': '3' },
        { 'EE': '3' },
        { 'MTK Lab': '1.5' },
        { 'TP Lab': '1.5' },
        { 'IPM Lab': '1.5' },
        { 'FT Lab': '1.5' }
      ],
      '4': [
        { 'MP': '3' },
        { 'Maths': '4' },
        { 'UPPME': '3' },
        { 'PT': '3' },
        { 'OB': '3' },
        { 'PT Lab': '1.5' },
        { 'MP Lab': '1.5' },
        { 'PM Lab': '1.5' },
        { 'NDT Lab': '1.5' }
      ],
      '5': [
        { 'IM': '3' },
        { 'HT': '3' },
        { 'DBM': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'HT Lab': '1.5' },
        { 'Foundry Lab': '1.5' },
        { 'PMCM Lab': '1.5' }
      ],
      '6': [
        { 'CPS': '3' },
        { 'SM': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'Computational Lab': '1.5' },
        { 'MP Lab': '1.5' },
        { 'MT Lab': '1.5' }
      ],
      '7': [
        { 'ISE': '3' },
        { 'MC': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'MC Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'Prod': {
      'P': [
        { 'BEE': '3' },
        { 'Maths': '4' },
        { 'EFBC': '3' },
        { 'EM': '3' },
        { 'PHY': '3' },
        { 'BEE Lab': '1.5' },
        { 'BCS Lab': '1.5' },
        { 'PHY Lab': '1.5' },
        { 'Work Shop': '1.5' }
      ],
      'C': [
        { 'BE': '3' },
        { 'Maths': '4' },
        { 'BCE': '3' },
        { 'PFPS': '3' },
        { 'Che': '3' },
        { 'BE Lab': '1.5' },
        { 'EGD Lab': '1.5' },
        { 'PFPS Lab': '1.5' },
        { 'Che Lab': '1.5' }
      ],
      '3': [
        { 'Thermo': '3' },
        { 'Maths': '4' },
        { 'MEM': '3' },
        { 'BMP': '3' },
        { 'EE': '3' },
        { 'IST Lab': '1.5' },
        { 'PP Lab': '1.5' },
        { 'CAMD Lab': '1.5' },
        { 'TME Lab': '1.5' }
      ],
      '4': [
        { 'ToM': '3' },
        { 'Maths': '4' },
        { 'SoM': '3' },
        { 'TMC': '3' },
        { 'OB': '3' },
        { 'PP Lab': '1.5' },
        { 'MC Lab': '1.5' },
        { 'Dynamics Lab': '1.5' },
        { 'MT Lab': '1.5' }
      ],
      '5': [
        { 'DME': '3' },
        { 'IM': '3' },
        { 'TD': '3' },
        { 'PE-1': '3' },
        { 'OE-1': '3' },
        { 'Ethics': '2' },
        { 'MD Lab': '1.5' },
        { 'Metrology Lab': '1.5' },
        { 'TD Lab': '1.5' }
      ],
      '6': [
        { 'TMF': '3' },
        { 'PMT': '3' },
        { 'PE-2': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'Ethics': '2' },
        { 'MF Lab': '1.5' },
        { 'FD Lab': '1.5' },
        { 'Sim Lab': '1.5' }
      ],
      '7': [
        { 'ANCM': '3' },
        { 'NTM': '3' },
        { 'PE-4': '3' },
        { 'OE-3': '3' },
        { 'Project-1': '3' },
        { 'NTM&FMS Lab': '1.5' },
        { 'SoI': '1.5' }
      ]
    },
    'Arch': {
      'P': [
        { 'ITA': '3' },
        { 'BM': '3' },
        { 'AM': '3' },
        { 'EAE': '3' },
        { 'BD Lab': '6' },
        { 'AG Lab': '2' },
        { 'BC Lab': '4' },
        { 'Work Shop': '2' }
      ],
      'C': [
        { 'HOA': '3' },
        { 'ABMF': '3' },
        { 'SM': '3' },
        { 'CS': '3' },
        { 'BD Lab': '6' },
        { 'AG Lab': '2' },
        { 'BC Lab': '4' },
        { 'VAD Lab': '2' }
      ],
      '3': [
        { 'HOA': '3' },
        { 'Climatology': '3' },
        { 'SA': '3' },
        { 'WSS': '3' },
        { 'AD Lab': '9' },
        { 'SL Lab': '2' },
        { 'BC Lab': '4' },
        { 'CA Lab': '2' }
      ],
      '4': [
        { 'HOA': '3' },
        { 'DRCCS': '3' },
        { 'LES': '3' },
        { 'PE-1': '3' },
        { 'AD Lab': '9' },
        { 'BC Lab': '4' },
        { 'CA Lab': '2' }
      ],
      '5': [
        { 'HOA': '3' },
        { 'LA': '3' },
        { 'DSS': '3' },
        { 'Acoustics': '3' },
        { 'EaB': '3' },
        { 'AD Lab': '9' },
        { 'LDS Lab': '1' },
        { 'WDD Lab': '4' }
      ],
      '6': [
        { 'ToD': '3' },
        { 'HSPH': '3' },
        { 'EVS': '3' },
        { 'HVACS': '3' },
        { 'AD Lab': '9' },
        { 'WDD Lab': '4' },
        { 'ID Lab': '3' }
      ],
      '7': [
        { 'IUD': '3' },
        { 'ABSS': '3' },
        { 'PE-2': '3' },
        { 'OE-1': '3' },
        { 'AD Lab': '9' },
        { 'RMS Lab': '3' },
        { 'NCBT Lab': '4' }
      ],
      '8': [
        { 'DRA': '3' },
        { 'PP': '3' },
        { 'PE-3': '3' },
        { 'OE-2': '3' },
        { 'AD Lab': '9' },
        { 'PTD Lab': '3' },
        { 'ABT Lab': '4' }
      ],
    },
  };

  const grades = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
  };

  const [branch, setBranch] = useState('CSE');
  const [semester, setSemester] = useState('P');
  const handleChangeBranch = (event) => {
    setBranch(event.target.value);
  };

  const handleChangeSemester = (event) => {
    setSemester(event.target.value);
  };
  const [selectedGrades, setSelectedGrades] = useState(
    subjects[branch][semester].reduce((acc, subject) => {
      acc[Object.keys(subject)[0]] = "O";
      return acc;
    }, {})
  );
  useEffect(() => {
    setSelectedGrades(
      subjects[branch][semester].reduce((acc, subject) => {
        acc[Object.keys(subject)[0]] = "O";
        return acc;
      }, {})
    );
  }, [branch, semester]);
  const handleGradeChange = (event, subjectName) => {
    setSelectedGrades({
      ...selectedGrades,
      [subjectName]: event.target.value,
    });
  };


  const filteredSubjects = subjects[branch][semester];
  const totalPoints = filteredSubjects.reduce(
    (total, subject) =>
      (total + subject[Object.keys(subject)[0]] * grades[selectedGrades[Object.keys(subject)[0]]]) || 0,
    0
  );
  const totalCredits = filteredSubjects.reduce(
    (total, subject) =>
      (total + subject[Object.keys(subject)[0]] * 1) || 0,
    0
  );

  const [showFinalGrade, setShowFinalGrade] = useState(false);

  const handleFinalGradeButtonClick = () => {
    setShowFinalGrade(true);
  };

  const finalgrade = showFinalGrade ? ((totalPoints / totalCredits).toFixed(2)) : null
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000', // Change the primary color
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
      }
    },
  });

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [color1, setColor1] = useState('#333838');
  const [divider, setDivider] = useState('#fff');
  const [letter, setletter] = useState('white');
  const Change = () => {
   
    setIsDarkMode(!isDarkMode);
    if(color === '#262727'){
    setColor('white');
     setColor1('#f3f3f3')
     setletter('#5f5f5f')
     setDivider('#a3a3a3')
    }else{
      setColor('#262727')
      setColor1('#333838')
      setletter('#fff')
      setDivider('#fff')
    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>

        <body style={{ background:color , minHeight: "100vh" }}>
          <Stack marginTop={{ sm: "125px", md: "145px" }} marginLeft={{ sm: "65px", md: "270px" }} justifyContent="center" alignItems="center" flexDirection="column">
            <Stack flexDirection="row" backgroundColor={color1}
              borderRadius="10px" height="60px" justifyContent="space-between" alignItems="center">
              <Stack justifyContent="space-between" flexDirection="row" width={{ xs: "30vw", md: "23vw", lg: "30vw" }} margin={{ xs: "0 30px", lg: "0 50px" }} alignItems="center"  backgroundColor={color1}>
                <Typography sx={{ color:letter, fontSize: "20px" }}>Branch</Typography>
                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={branch} onChange={handleChangeBranch}


                    sx={{
                      background: "#FFFFFF",
                      boxShadow: " -1px -1px 2px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(165, 165, 165, 0.5), inset 1px -1px 2px rgba(165, 165, 165, 0.2)",
                      borderRadius: "20px"
                    }}
                    inputProps={{
                      MenuProps: {
                        PaperProps: {
                          style: {
                            // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                            // width: 250,
                          },
                        },
                        MenuListProps: {
                          sx: {
                            background: 'linear-gradient(0deg, rgba(0, 97, 162, 0.08), rgba(0, 97, 162, 0.08)), #FDFCFF;',
                            // color:"#fff",
                            "&& .Mui-selected": {
                              background: "#ffffff",
                              borderRadius: '5px',
                              // color:"#fff"
                            }
                          }
                        }
                      }
                    }}
                  >

                    <MenuItem value="CSE" sx={{ fontWeight: "900", }}>CSE</MenuItem>
                    <MenuItem value="ETC" sx={{ fontWeight: "900", }}>ETC</MenuItem>
                    <MenuItem value="EE" sx={{ fontWeight: "900", }}>EE</MenuItem>
                    <MenuItem value="ME" sx={{ fontWeight: "900", }}>ME</MenuItem>
                    <MenuItem value="EEE" sx={{ fontWeight: "900", }}>EEE</MenuItem>
                    <MenuItem value="IT" sx={{ fontWeight: "900", }}>IT</MenuItem>
                    <MenuItem value="MME" sx={{ fontWeight: "900", }}>MME</MenuItem>
                    <MenuItem value="CE" sx={{ fontWeight: "900", }}>CE</MenuItem>
                    <MenuItem value="Prod" sx={{ fontWeight: "900", }}>Prod</MenuItem>
                    <MenuItem value="Civil" sx={{ fontWeight: "900", }}>Civil</MenuItem>
                    <MenuItem value="Arch" sx={{ fontWeight: "900", }}>Arch</MenuItem>
                  </Select>
                </FormControl>

              </Stack>
              <Divider orientation="vertical" flexItem sx={{ borderColor: {divider} }} />
              <Stack justifyContent="space-between" flexDirection="row" width={{ xs: "30vw", md: "23vw", lg: "30vw" }} margin="0 50px" alignItems="center">
                <Typography sx={{ color: letter , fontSize: "20px" }}>Semester</Typography>
                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={semester} onChange={handleChangeSemester}

                    sx={{
                      background: "#FFFFFF",
                      boxShadow: " -1px -1px 2px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(165, 165, 165, 0.5), inset 1px -1px 2px rgba(165, 165, 165, 0.2)", lineHeight: "0.3375 em", minHeight: "0px",
                      borderRadius: "20px"
                    }}
                    inputProps={{
                      MenuProps: {
                        PaperProps: {
                          style: {
                            // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                            // width: 250,
                          },
                        },
                        MenuListProps: {
                          sx: {
                            background: 'linear-gradient(0deg, rgba(0, 97, 162, 0.08), rgba(0, 97, 162, 0.08)), #FDFCFF;',
                            // color:"#fff",
                            "&& .Mui-selected": {
                              background: "#ffffff",
                              borderRadius: '5px',
                              // color:"#fff"
                            }
                          }
                        }
                      }
                    }}
                  >
                    <MenuItem value="P" sx={{ fontWeight: "900", }}>I</MenuItem>
                    <MenuItem value="C" sx={{ fontWeight: "900", }}>II</MenuItem>
                    <MenuItem value="3" sx={{ fontWeight: "900", }}>III</MenuItem>
                    <MenuItem value="4" sx={{ fontWeight: "900", }}>IV</MenuItem>
                    <MenuItem value="5" sx={{ fontWeight: "900", }}>V</MenuItem>
                    <MenuItem value="6" sx={{ fontWeight: "900", }}>VI</MenuItem>
                    < MenuItem value="7" sx={{ fontWeight: "900", }}>VII</MenuItem>
                  </Select>
                </FormControl>

              </Stack>
            </Stack>
            <Stack flexDirection="row" justifyContent="center" alignItems="center" margin="20px 0px">
              <Typography sx={{ color: letter , fontWeight: "600", fontSize: "24px", borderBottom: "1.5px solid", borderBottomColor: "#9E4F4F", paddingBottom: "3px" }}>Theory & Lab</Typography>
              {/* <Typography sx={{color:"#fff",fontWeight:"600",fontSize:"24px",borderBottom:"1.5px solid",borderBottomColor:"#9E4F4F",paddingBottom:"3px"}}>Lab</Typography> */}
            </Stack>



            <Stack flexDirection={{ xs: "column", lg: "row" }} justifyContent={{ xs: "center", lg: "space-around" }} gap="40px" alignItems={{ xs: "center", lg: "flex-start" }} paddingBottom="40px">

              <Stack flexDirection="column" gap="20px" >
                {filteredSubjects.map((subject) => (
                  <Stack key={subject} sx={{
                    background: color1,
                    backdropFilter: "blur(2px)",
                    borderRadius: "10px"
                  }} flexDirection="row" padding="20px" alignContent="center" justifyContent="center" gap={{ xs: "40px", lg: "60px" }}>
                    <Typography sx={{ color: letter , minWidth: "100px" }}>{Object.keys(subject)[0]}</Typography>
                    <Typography sx={{ color: letter , }}>Credits</Typography>
                    <Typography sx={{ color: letter }}>{Object.values(subject)[0]}</Typography>
                    <label htmlFor="grade-select" style={{ color: letter }}>Grade</label>
                    <select style={{
                      background: color ,
                      borderRadius: "20px", color:letter , padding: "3px"
                    }}
                      value={selectedGrades[Object.keys(subject)[0]]}
                      onChange={(event) => handleGradeChange(event, Object.keys(subject)[0])}
                    >
                      {Object.keys(grades).map((grade) => (
                        <option style={{ color: letter }} key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </Stack>
                ))}
              </Stack>

              <Stack flexDirection="column" gap="20px" alignItems="center" paddingBottom="40px" justifyContent="center">
                {/* <Stack sx={{background: "rgba(51, 56, 56, 0.9)",
backdropFilter: "blur(2px)",
borderRadius: "10px"}} flexDirection="row" padding="20px" alignContent="center" justifyContent="center" gap="60px">
<Typography sx={{color:"#fff"}}>DT</Typography>
<Typography sx={{color:"#fff"}}>Credits</Typography>
<Typography sx={{color:"#fff"}}>1.5</Typography>
<Typography sx={{color:"#fff"}}>Theory</Typography>
</Stack> */}

                <Button sx={{
                  background: "#1B84FF",
                  boxShadow: "2px 4px 4px rgba(165, 165, 165, 0.2)",
                  borderRadius: "20px", padding: "5px 10px"
                }} onClick={handleFinalGradeButtonClick}><Typography sx={{ fontWeight: "900", textTransform: "initial", color: letter, padding: "3px 10px " }}>Calculate</Typography>
                </Button>
                {finalgrade &&
                  <Stack sx={{
                    background: "rgba(51, 56, 56, 0.9)",
                    backdropFilter: "blur(2px)",
                    borderRadius: "10px"
                  }} flexDirection="row" padding="20px" alignContent="center" justifyContent="space-between" gap="60px">
                    <Typography sx={{ color: "#fff", fontWeight: "600" }}>SGPA:</Typography>
                    <Typography sx={{ color: "#fff" }}>  <span>{finalgrade}</span>
                      <span style={{ fontSize: "11px" }}>/10</span></Typography>
                  </Stack>
                }
              </Stack>
            </Stack>

          </Stack>

          <Navbar Change={Change} isDarkMode={isDarkMode} />
        </body>
      </ThemeProvider>
    </>
  )
}
