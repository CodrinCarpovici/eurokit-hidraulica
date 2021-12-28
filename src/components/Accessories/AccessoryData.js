//Cots
import cotsHeader from "../../assets/img/cotsHeader.jpg";
import cotsDiagram from "../../assets/img/cotsDiagram.png";

//Closed Supports
import closedSupportHeader from "../../assets/img/closedSupportHeader.jpg";
import closedSupportDiagram from "../../assets/img/closedSupportDiagram.png";

//Open Supports
import openSupportHeader from "../../assets/img/openSupportHeader.jpg";
import openSupportDiagram from "../../assets/img/openSupportDiagram.png";

//End Of Stroke Valves
import strokeHeader from "../../assets/img/strokeHeader.jpg";
import strokeDiagram from "../../assets/img/strokeDiagram.png";

//Directional Solenoid Valves
import directionalValveHeader from "../../assets/img/directionalValveHeader.jpg";
import directionalValveDiagram from "../../assets/img/directionalValveDiagram.jpg";

//Directional Hydraulic Valves
import directionalHydraulicValveHeader from "../../assets/img/directionalHydraulicValveHeader.jpg";
import directionalHydraulicValveDiagram from "../../assets/img/directionalHydraulicValveDiagram.jpg";

//Nuts Kit
import nutsHeader from "../../assets/img/nutsHeader.jpg";
import nutsDiagram from "../../assets/img/nutsDiagram.jpg";

//Gasket Kit
import gasketKitHeader from "../../assets/img/gasketKitHeader.jpg";
import gasketKitDiagram from "../../assets/img/gasketKitDiagram.png";

//Guide Ring Kit
import guideRingKitHeader from "../../assets/img/guideRingKitHeader.jpg";
import guideRingKitDiagram from "../../assets/img/guideRingKitDiagram.png";

const data = [
    {
      id: 1,
      value: {
        title: "Culle",
        headerImage: cotsHeader,
        diagramImage: cotsDiagram
      }
    },
    {
        id: 2,
        value: {
          title: "Suporturi Inchise",
          headerImage: closedSupportHeader,
          diagramImage: closedSupportDiagram
        }
      },
      {
        id: 3,
        value: {
          title: "Suporturi Deschise",
          headerImage: openSupportHeader,
          diagramImage: openSupportDiagram
        }
      },
      {
        id: 4,
        value: {
          title: "Supape De Sfârșit De Cursă",
          headerImage: strokeHeader,
          diagramImage: strokeDiagram
        }
      },
      {
        id: 5,
        value: {
          title: "Supape Direcționale cu Solenoid",
          headerImage: directionalValveHeader,
          diagramImage: directionalValveDiagram
        }
      },
      {
        id: 6,
        value: {
          title: "Supape Hidraulice Direcționale",
          headerImage: directionalHydraulicValveHeader,
          diagramImage: directionalHydraulicValveDiagram
        }
      },
      {
        id: 7,
        value: {
          title: "Kit chiocciole",
          headerImage: nutsHeader,
          diagramImage: nutsDiagram
        }
      },
      {
        id: 8,
        value: {
          title: "Kit Garnituri",
          headerImage: gasketKitHeader,
          diagramImage: gasketKitDiagram
        }
      },
      {
        id: 9,
        value: {
          title: "Kit Inel De Ghid",
          headerImage: guideRingKitHeader,
          diagramImage: guideRingKitDiagram
        }
      }
]

export default data