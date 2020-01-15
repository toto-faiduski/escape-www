import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const Tasks = [
      {
        id: 'dda691ea-2634-4b6c-90f8-a302aad27e1d',
        addTime: '2019-10-22T17:50:01',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: '25%'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:02',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:03',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:04',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:05',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:06',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:07',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      },
      {
        id: 'c0abdba6-afed-4517-b2cc-633a4ea50c06',
        addTime: '2019-10-22T17:53:08',
        clientName: 'tagginfo\\ruggeri',
        type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
        parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
        progress: 'Waiting...'
      }
    ];

    const RecentTasks = [
    {
      id: 'dda691ea-2634-4b6c-90f8-a302aad27e1e',
      addTime: '2019-10-22T17:55:38',
      endTime: '2019-10-22T17:56:45',
      clientName: 'tagginfo\\ruggeri',
      type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
      parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
      status: 'Annulé',
      retcode: '7'
    },
    {
      id: 'dda691ea-2634-4b6c-90f8-a302aad27e1d',
      addTime: '2019-10-22T17:50:01',
      endTime: '2019-10-22T17:50:27',
      clientName: 'tagginfo\\ruggeri',
      type: 'EditionCU_MultileafEnhancement   3.1.0.48(x64)',
      parameters: 'Mode "MultiLeafEnhancement" ScriptFileName "\\\\fileserver_a\\Clients\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\perso\\70929_bpj_poste#2019-10-10.apa" DataFileName "\\\\FILESERVER_A\\CLIENTS\\Bayard\\Relances\\Presse_Jeune\\Cde70929\\fichiers\\2019-10-22\\70929_bpj_poste_Edit.dat" MachineID "44" Resolution "1200" DisableScriptDisplay "YES" DisableLogEvent "YES" RemoteServer "escape_m"',
      status: 'Terminé',
      retcode: '0'
    },
    ];

    //return {Tasks};
    return {Tasks,RecentTasks};
  }

}
