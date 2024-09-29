// 数据文件
export const fieldData = {
    "1": "您选择的领域是：生物医药，生物医药是指利用生物学原理和技术研究和应用于医学领域的科学和技术。它涉及到对生物体结构和功能的理解，以及开发新药物、诊断工具和治疗方法。生物医药领域包括但不限于基因工程、蛋白质工程、细胞治疗、基因编辑、生物制药、精准医学等。通过生物医药的研究和应用，可以更好地理解和治疗疾病，提高人类健康水平。",
    "2": "您选择的领域是：电气电子 电气电子是指电力和电子技术的综合领域。它涵盖了电力工程、电子工程、通信工程等相关学科和技术领域。电气电子技术主要研究和应用电流、电压、电磁场等电学现象，以及电子元器件、电路设计、电力传输、通信技术等。在现代社会中，电气电子技术广泛应用于能源、通信、信息技术、自动化、医疗、交通等各个领域，是现代社会不可或缺的基础技术。",
    "3": "您选择的领域是：计算机软件 计算机软件是指为各种计算机系统、设备和程序提供的各种软件。它包括操作系统、数据库管理系统、办公自动化软件、多媒体软件、网络安全软件、游戏软件、CAD/CAM软件、工业控制软件等。计算机软件的开发和应用是计算机技术发展的重要组成部分，是计算机应用和服务的基础。",
};


export const set1 = {
    data: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' }
    ],
    links: [
        { source: 'A', target: 'B', value: 10 },
        { source: 'A', target: 'C', value: 15 },
        { source: 'B', target: 'D', value: 10 },
        { source: 'C', target: 'D', value: 5 }
    ]
}




export const set2 = {
    data: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'E' }
    ],
    links: [
        { source: 'A', target: 'B', value: 5 },
        { source: 'B', target: 'C', value: 10 },
        { source: 'C', target: 'E', value: 20 },
        { source: 'A', target: 'E', value: 10 }
    ]
}



export const set3 = {
    data: [
        { name: 'A' },
        { name: 'B' },
        { name: 'D' },
        { name: 'F' }
    ],
    links: [
        { source: 'A', target: 'B', value: 10 },
        { source: 'B', target: 'D', value: 15 },
        { source: 'D', target: 'F', value: 5 },
        { source: 'A', target: 'F', value: 20 }
    ]
}

