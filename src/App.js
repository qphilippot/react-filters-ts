import './App.css';
import {FilterProvider} from "./hooks/FilterContext.tsx";
import FilterList from "./components/FilterList.tsx";
import FilteredItemList from "./components/FilteredItemList.tsx";

const items = [
    {"id": "NDMSYVD8R16X", "shape": "circle", "color": "red"},
    {"id": "6G6KET71RTU9", "shape": "circle", "color": "green"},
    {"id": "INQ47B0YFWEY", "shape": "square", "color": "blue"},
    {"id": "WB6V16QT4QMP", "shape": "square", "color": "red"},
    {"id": "XBRCUOS9PFV5", "shape": "circle", "color": "orange"},
    {"id": "IC5VWO3LMFIQ", "shape": "square", "color": "blue"},
    {"id": "SHM631H9JQ5F", "shape": "circle", "color": "green"},
    {"id": "1C4WES27PGUC", "shape": "circle", "color": "green"},
    {"id": "NY647QFO0JOV", "shape": "square", "color": "orange"},
    {"id": "B6ML3EFTI0FR", "shape": "circle", "color": "blue"},
    {"id": "OJ0QSED4TCBJ", "shape": "circle", "color": "green"},
    {"id": "FE3W6CNNBIE7", "shape": "circle", "color": "blue"},
    {"id": "KRQT8NBR46HW", "shape": "circle", "color": "orange"},
    {"id": "XMFSECFH7V13", "shape": "square", "color": "blue"},
    {"id": "C0NQZ2A03TKS", "shape": "circle", "color": "red"},
    {"id": "EEAEEUOQX364", "shape": "circle", "color": "blue"},
    {"id": "JNTN5PT0X7M9", "shape": "square", "color": "blue"},
    {"id": "4Y4K3JNY2PP6", "shape": "circle", "color": "orange"},
    {"id": "8Y14Q233YMO6", "shape": "square", "color": "blue"},
    {"id": "R8MG08JLIRSP", "shape": "square", "color": "orange"},
    {"id": "M3MHD7IJF1LT", "shape": "square", "color": "red"},
    {"id": "UIV5DYYU0859", "shape": "circle", "color": "red"},
    {"id": "QKW3NMGSOAC6", "shape": "square", "color": "orange"},
    {"id": "7GU7HILD747M", "shape": "circle", "color": "orange"},
    {"id": "P4EBFND38T4N", "shape": "square", "color": "blue"},
    {"id": "VUC64KDM1WAF", "shape": "circle", "color": "red"},
    {"id": "COAN5XS3J2BF", "shape": "square", "color": "blue"},
    {"id": "YFAHH36KXCKO", "shape": "circle", "color": "blue"},
    {"id": "RTSNZ3DTYMFA", "shape": "square", "color": "green"},
    {"id": "FX680I7M2B6B", "shape": "circle", "color": "red"},
    {"id": "IM0YM9902N5E", "shape": "square", "color": "red"},
    {"id": "5M4PC2XNLRUF", "shape": "square", "color": "blue"},
    {"id": "LAYJTBLD1YYE", "shape": "circle", "color": "blue"},
    {"id": "LRN7CP3BSBLR", "shape": "square", "color": "green"},
    {"id": "Z3V7B6NKY9SG", "shape": "square", "color": "red"},
    {"id": "VQAQ4GTFZ65U", "shape": "circle", "color": "orange"},
    {"id": "HFIA7YN55CXE", "shape": "square", "color": "green"},
    {"id": "IT4MCDUC81MP", "shape": "square", "color": "orange"},
    {"id": "8C3WHYI5KD6B", "shape": "square", "color": "blue"},
    {"id": "EM3LBEHZNAQU", "shape": "square", "color": "red"},
    {"id": "KIOJV7SF7LEV", "shape": "circle", "color": "red"},
    {"id": "PA6N0IWLFUE3", "shape": "square", "color": "orange"},
    {"id": "NQ8OV1K6X9LY", "shape": "circle", "color": "blue"},
    {"id": "2IJ3UYK6LFS4", "shape": "square", "color": "red"},
    {"id": "QO8AERPSBYZM", "shape": "square", "color": "blue"},
    {"id": "DMXHZL4J9PRA", "shape": "circle", "color": "green"},
    {"id": "VYUKI3MP9N2W", "shape": "square", "color": "orange"},
    {"id": "AJ2WVYHLXO0C", "shape": "circle", "color": "red"},
    {"id": "GT7WIBFPXSC8", "shape": "square", "color": "blue"},
    {"id": "MBVNZ8JXUO9T", "shape": "circle", "color": "green"},
    {"id": "QFWK8D3UM9PI", "shape": "square", "color": "red"},
    {"id": "UBH3KRQ8OSMC", "shape": "square", "color": "blue"},
    {"id": "4VFI8XRSP0LE", "shape": "circle", "color": "orange"},
    {"id": "FHLWYQXZSIJC", "shape": "circle", "color": "red"},
    {"id": "GL3CZPAH5VMQ", "shape": "square", "color": "green"},
    {"id": "AWBKE1NCZUV5", "shape": "circle", "color": "blue"},
    {"id": "9MV6B4DR7HQL", "shape": "square", "color": "orange"},
    {"id": "IEOGQ4S9YH3K", "shape": "circle", "color": "green"},
    {"id": "WJXKO2CR57NM", "shape": "circle", "color": "blue"},
    {"id": "L7UY6DKBXZ2O", "shape": "square", "color": "red"},
    {"id": "DJFL6MBCQW1E", "shape": "circle", "color": "green"},
    {"id": "M0VKL9U7B1P4", "shape": "square", "color": "orange"},
    {"id": "COXF6KHY1U7Z", "shape": "square", "color": "blue"},
    {"id": "3Q2X5BRI7N6J", "shape": "circle", "color": "red"},
    {"id": "EVHJNTWPIQZ5", "shape": "square", "color": "green"},
    {"id": "5BKTX2I39GW7", "shape": "circle", "color": "orange"},
    {"id": "Y3DL1IU76PZF", "shape": "square", "color": "blue"},
    {"id": "SVW0LGPUOE5R", "shape": "square", "color": "red"},
    {"id": "NG5I8QLWX9SJ", "shape": "circle", "color": "green"},
    {"id": "MCVNTU2RQXLK", "shape": "circle", "color": "blue"},
    {"id": "H4KMRP18DF3N", "shape": "square", "color": "green"},
    {"id": "W72FIUXMBYTG", "shape": "circle", "color": "red"},
    {"id": "AF0QXVHZJ3YM", "shape": "circle", "color": "orange"},
    {"id": "9WQTSUYMJ0LV", "shape": "square", "color": "green"},
    {"id": "DBX0E3TPMYR8", "shape": "circle", "color": "red"},
    {"id": "O8ZGYJMCV1LX", "shape": "square", "color": "blue"},
    {"id": "K76HVQUAPSG4", "shape": "circle", "color": "green"},
    {"id": "LHX4YQFMDGT2", "shape": "square", "color": "orange"},
    {"id": "7RFLI5K6SOTM", "shape": "circle", "color": "blue"},
    {"id": "ZI3LDX4BVOSW", "shape": "square", "color": "red"},
    {"id": "V82BJQOTKF1M", "shape": "circle", "color": "orange"},
    {"id": "EQ4P1ZGMIU9B", "shape": "circle", "color": "red"},
    {"id": "JN7KXW3HPAI2", "shape": "square", "color": "blue"},
    {"id": "E6N5XKBZQ7LP", "shape": "circle", "color": "green"},
    {"id": "PM0L9RXHZ4S1", "shape": "square", "color": "red"},
    {"id": "AFKTG3BYX2MU", "shape": "square", "color": "green"},
    {"id": "N4JLW1XH2OGV", "shape": "circle", "color": "blue"},
    {"id": "SJVQO6MF4CX7", "shape": "square", "color": "red"},
    {"id": "BG5RHMNTY3W0", "shape": "circle", "color": "orange"},
    {"id": "XW9TJU5M3PEK", "shape": "square", "color": "green"},
    {"id": "FVO3YWMEGRPN", "shape": "circle", "color": "blue"}
];


function App() {
    return (
        <div className="App">
            <FilterProvider>
                <h1>Liste des filtres:</h1>
                <FilterList/>
                <FilteredItemList items={items}/>
            </FilterProvider>
        </div>
    );
}

export default App;
