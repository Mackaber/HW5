import numpy as np
from IPython.display import IFrame
import pandas as pd 
import os
import shutil
import datetime
from pathlib import Path
path = ""
dataset = pd.read_csv(path+"dataset.csv") 

def save(contents,name):
  f= open(path+name+".js","w+")
  f.write(contents)
  f.close()
  shutil.copy(path+"test.html",path+name+".html")
  f=open(path+name+".html", "a+")
  f.write("<script src='"+name+".js'></script>")
  f.close() 

def runT1NB(data,labels,name,ptrn,fname):
    contents = Path("template1NM.js").read_text()
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    multVals = ""
    for ind in range(len(data)-1):
        
        d = data[ind]
        l = labels[ind]
        
        tempD = multis.replace("#data0#",str(d))
        tempD = tempD.replace("#perc#",str(l))
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
    
    line = [[minimx,data[-1][0]],[maximx,data[-1][0]]]
    
    contents = contents.replace("#line#",str(line))
    contents = contents.replace("#linename#","'"+ptrn[0]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")
    
    save(contents,fname)

def runCategoricalNum(data,labels,name,ptrn,fname):
    symbols = ["triangle-down", "triangle", "diamond", "triangle", "circle"]
    
    contents = Path("template1NM.js").read_text()
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    multVals = ""
    for ind in range(len(data)-1):
        
        d = data[ind]
        l = labels[ind]
        
        datastr = ""
        for dt in d:
            datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {symbol:'"+symbols[dt[-1]]+"',radius: 4}},"
        
        
        tempD = multis.replace("#data0#","["+datastr+"]")
        tempD = tempD.replace("#perc#",str(l))
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
    
    line = [[minimx,data[-1][0]],[maximx,data[-1][0]]]
    
    contents = contents.replace("#line#",str(line))
    contents = contents.replace("#linename#","'"+ptrn[0]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")
    
    save(contents,fname)

def datastr2(d,symbols,color):
    datastr = ""
    for dt in d:
        datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {symbol:'"+symbols[dt[-1]]+"',radius: 4}},"
    
    return datastr

def datastr3(d,symbols,color):
    datastr = ""
    for dt in d:
        datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {symbol:'"+symbols[dt[-1]]+"',radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors["+str(color)+"]],[1, Highcharts.Color(Highcharts.getOptions().colors["+str(color)+"]).brighten(-"+str(dt[2])+").get('rgb')]]}}},"
    
    return datastr

def datastr4(d,symbols,color):
    datastr = ""
    for dt in d:
        datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {symbol:'"+symbols[dt[-1]]+"',radius: "+str(dt[3])+",fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors["+str(color)+"]],[1, Highcharts.Color(Highcharts.getOptions().colors["+str(color)+"]).brighten(-"+str(dt[2])+").get('rgb')]]}}},"
    
    return datastr
    
def runCategoricalNum2(data,labels,name,ptrn,fname,op):
    symbols = ["triangle-down", "triangle", "diamond", "triangle", "circle"]
    
    contents = Path("template2NB.js").read_text()
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    maximy = -10000000
    multVals = ""
    
    color = 0
    for ind in range(len(data)-2):
        
        d = data[ind]
        l = labels[ind]
        
        datastr = ""
        if(op == 2):
            datastr = datastr2(d,symbols,color)
        if(op == 3):
            datastr = datastr3(d,symbols,color)
        if(op == 4):
            datastr = datastr4(d,symbols,color)
        
        color = color+3
        
        tempD = multis.replace("#data0#","["+datastr+"]")
        tempD = tempD.replace("#perc#",str(l))
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
        
        max1y = d0[:,1].max()
        if(max1y > maximy):
            maximy = max1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
        
    line = [[data[-2][0],minimx],[data[-2][0],maximx]]
    
    contents = contents.replace("#line0#",str(line))
    contents = contents.replace("#linename0#","'"+ptrn[0]+"'")

    
    line2 = [[minimy,data[-1][0]],[maximy,data[-1][0]]]
    
    contents = contents.replace("#line1#",str(line2))
    contents = contents.replace("#linename1#","'"+ptrn[1]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")
    
    save(contents,fname)

def oneItemCatNum(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    options = ptrns[0] 
    categ = ptrns[-1]

    colVal = dataset[options["name"]].values
    colCat = dataset[categ["name"]].values
    
    count = 0

    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
    
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal)):
        cva = colVal[indx]
        cl = classes[indx]
        cat = colCat[indx]
        
        sw1 = switcher(cva,options)
        cin = cls.index(cl)
        
        swCat = 0
        
        if(categ["value"] == cat):
            swCat = 1
        
        run1[cin].append([count,cva,swCat])
        
        if(sw1[options["operator"]]):
            labels[cin] = labels[cin]+1
        
        count = count +1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options["value"])])
    print(fptrns)
    runCategoricalNum(run1,labels,name,fptrns,fname)
    
def twoItemCatNum(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    ptrns,fptrns = dividePat(patterns)
    categ = ptrns[-1]
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    colCat = dataset[categ["name"]].values
    
    categ = ptrns[-1]
    
    count = 0

    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
    
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        
        swCat = 0
            
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cl = classes[indx]
        
        cat = colCat[indx]
                
        if(categ["value"] == cat):
            swCat = 1
            
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        
        cin = cls.index(cl)
        run1[cin].append([cva,cva2,swCat])
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]]):
            labels[cin] = labels[cin]+1
        
        count = count +1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    runCategoricalNum2(run1,labels,name,fptrns,fname,2)
    
def threeItemCatNum(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    ptrns,fptrns = dividePat(patterns)
    categ = ptrns[-1]
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    options3 = ptrns[2]
    
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    colVal3 = dataset[options3["name"]].values
    colCat = dataset[categ["name"]].values
    
    categ = ptrns[-1]
    
    count = 0

    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
    
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        
        swCat = 0
            
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cva3 = colVal3[indx]
        
        cl = classes[indx]
        
        cat = colCat[indx]
                
        if(categ["value"] == cat):
            swCat = 1
            
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        sw3 = switcher(cva3,options3)
        
        cin = cls.index(cl)
        
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]] and
          sw3[options3["operator"]]):
            labels[cin] = labels[cin]+1
            run1[cin].append([cva,cva2,0.9,swCat])
        else:
            run1[cin].append([cva,cva2,0.3,swCat])
        
        count = count +1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    runCategoricalNum2(run1,labels,name,fptrns,fname,3)
    
def fourItemCatNum(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    ptrns,fptrns = dividePat(patterns)
    categ = ptrns[-1]
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    options3 = ptrns[2]
    options4 = ptrns[3]
    
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    colVal3 = dataset[options3["name"]].values
    colVal4 = dataset[options4["name"]].values
    colCat = dataset[categ["name"]].values
    
    categ = ptrns[-1]
    
    count = 0

    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
    
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        
        swCat = 0
            
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cva3 = colVal3[indx]
        cva4 = colVal4[indx]
        
        cl = classes[indx]
        
        cat = colCat[indx]
                
        if(categ["value"] == cat):
            swCat = 1
            
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        sw3 = switcher(cva3,options3)
        sw4 = switcher(cva4,options4)
        
        cin = cls.index(cl)
        
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]] and
          sw3[options3["operator"]] and sw4[options4["operator"]]):
            labels[cin] = labels[cin]+1
            run1[cin].append([cva,cva2,0.9,8,swCat])
        else:
            run1[cin].append([cva,cva2,0.3,3,swCat])
        
        count = count +1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    runCategoricalNum2(run1,labels,name,fptrns,fname,4)

def runT2NB(data,labels,name,ptrn,fname):
    contents = Path("template2NB.js").read_text()
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    maximy = -10000000
    multVals = ""
    for ind in range(len(data)-2):
        
        d = data[ind]
        l = labels[ind]
        
        tempD = multis.replace("#data0#",str(d))
        tempD = tempD.replace("#perc#",str(l))
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
            
        max1y = d0[:,1].max()
        if(max1y > maximy):
            maximy = max1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
    
    
    line = [[data[-2][0],minimx],[data[-2][0],maximx]]
    
    contents = contents.replace("#line0#",str(line))
    contents = contents.replace("#linename0#","'"+ptrn[0]+"'")

    
    line2 = [[minimy,data[-1][0]],[maximy,data[-1][0]]]
    
    contents = contents.replace("#line1#",str(line2))
    contents = contents.replace("#linename1#","'"+ptrn[1]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")  
    
    save(contents,fname)
    
def runT3NB(data,labels,name,ptrn,fname):
    contents = Path("template2NB.js").read_text()
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    maximy = -10000000
    multVals = ""
    
    color = 0
    for ind in range(len(data)-2):
        
        d = data[ind]
        l = labels[ind]
        
        datastr = ""
        for dt in d:
            datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors["+str(color)+"]],[1, Highcharts.Color(Highcharts.getOptions().colors["+str(color)+"]).brighten(-"+str(dt[2])+").get('rgb')]]}},},"
        
        color = color+3
        
        tempD = multis.replace("#data0#,","["+datastr+"],")
        tempD = tempD.replace("#perc#",str(l))
        
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
        
        max1y = d0[:,1].max()
        if(max1y > maximy):
            maximy = max1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
    
    line = [[data[-2][0],minimx],[data[-2][0],maximx]]
    
    contents = contents.replace("#line0#",str(line))
    contents = contents.replace("#linename0#","'"+ptrn[0]+"'")
    
    line2 = [[minimy,data[-1][0]],[maximy,data[-1][0]]]
    
    contents = contents.replace("#line1#",str(line2))
    contents = contents.replace("#linename1#","'"+ptrn[1]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")  
    
    save(contents,fname)
    
def runT4NB(data,labels,name,ptrn,fname):
    contents = Path("template2NB.js").read_text()
    
    multis = "{type: 'scatter',name: #perc#,data: #data0#,marker: {radius: 4}},"
    
    dats = []
    minimx = 10000000
    minimy = 10000000
    maximx = -10000000
    maximy = -10000000
    multVals = ""
    
    color = 0
    for ind in range(len(data)-2):
        
        d = data[ind]
        l = labels[ind]
        
        datastr = ""
        for dt in d:
            datastr += "{x: "+str(dt[0])+",y: "+str(dt[1])+", marker: {radius: "+str(dt[3])+",fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors["+str(color)+"]],[1, Highcharts.Color(Highcharts.getOptions().colors["+str(color)+"]).brighten(-"+str(dt[2])+").get('rgb')]]}},},"

        color = color+3
        
        tempD = multis.replace("#data0#,","["+datastr+"],")
        tempD = tempD.replace("#perc#",str(l))
        
        multVals = multVals+tempD
        
        d0=np.array(d)

        min1x = d0[:,0].min()
        if(min1x < minimx):
            minimx = min1x
        
        max1x = d0[:,0].max()
        if(max1x > maximx):
            maximx = max1x
    
        min1y = d0[:,1].min()
        if(min1y < minimy):
            minimy = min1y
        
        max1y = d0[:,1].max()
        if(max1y > maximy):
            maximy = max1y
    
    contents = contents.replace("#minvalue#",str(minimx))
    contents = contents.replace("#maxvalue#",str(maximx))
    contents = contents.replace("#minyvalue#",str(minimy))
    
    line = [[data[-2][0],minimx],[data[-2][0],maximx]]
    
    contents = contents.replace("#line0#",str(line))
    contents = contents.replace("#linename0#","'"+ptrn[0]+"'")
    
    line2 = [[minimy,data[-1][0]],[maximy,data[-1][0]]]
    contents = contents.replace("#line1#",str(line2))
    contents = contents.replace("#linename1#","'"+ptrn[1]+"'")
    
    contents = contents.replace("#multivars#",multVals)
    
    contents = contents.replace("#text#","'"+name+"'")  
    
    save(contents,fname)
    
def switcher(cva,options1):
    switch = {
        "<=": cva <= float(options1["value"]),
        ">=": cva >= float(options1["value"]),
        "<": cva < float(options1["value"]),
        ">": cva > float(options1["value"]),
        "=": cva == float(options1["value"]),
        "==": cva == options1["value"],
        "!=": cva != float(options1["value"]),
        "!==": cva != options1["value"],
        }
    return switch

def dividePat(pattern):
    ptrns = pattern.split(" AND ")
    rptr = []
    for ptr in ptrns:
        rptr.append(parser(ptr))
    
    return rptr,ptrns

def fourItemNB(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    options3 = ptrns[2]
    options4 = ptrns[3]
    
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    colVal3 = dataset[options3["name"]].values
    colVal4 = dataset[options4["name"]].values

    count = 0
    
    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
        
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cva3 = colVal3[indx]
        cva4 = colVal4[indx]
        
        cl = classes[indx]
        
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        sw3 = switcher(cva3,options3)
        sw4 = switcher(cva4,options4)
        
        cin = cls.index(cl)
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]] and
          sw3[options3["operator"]] and sw4[options4["operator"]]):
            labels[cin] = labels[cin]+1
            run1[cin].append([cva,cva2,0.9,8])
        else:
            run1[cin].append([cva,cva2,0.3,3])
                
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    
    runT4NB(run1,labels,name,fptrns,fname)

def threeItemNB(patterns,dataset,name,fname):
    ptrns,fptrns = dividePat(patterns)
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    options3 = ptrns[2]
    
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    colVal3 = dataset[options3["name"]].values

    count = 0
    
    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
        
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cva3 = colVal3[indx]
        
        cl = classes[indx]
        
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        sw3 = switcher(cva3,options3)
        
        cin = cls.index(cl)
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]] and
          sw3[options3["operator"]]):
            labels[cin] = labels[cin]+1
            run1[cin].append([cva,cva2,0.9])
        else:
            run1[cin].append([cva,cva2,0.3])
                
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    
    runT3NB(run1,labels,name,fptrns,fname)

def twoItemNB(patterns,dataset,name,fname):
    ptrns,fptrns = dividePat(patterns)
    
    options1 = ptrns[0]
    options2 = ptrns[1]
    print(options2)
    colVal1 = dataset[options1["name"]].values
    colVal2 = dataset[options2["name"]].values
    
    count = 0
    
    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
        
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal1)):
        cva = colVal1[indx]
        cva2 = colVal2[indx]
        cl = classes[indx]
        
        sw1 = switcher(cva,options1)
        sw2 = switcher(cva2,options2)
        
        cin = cls.index(cl)
        run1[cin].append([cva,cva2])
        
        if(sw1[options1["operator"]] and sw2[options2["operator"]]):
            labels[cin] = labels[cin]+1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options1["value"])])
    run1.append([float(options2["value"])])
    runT2NB(run1,labels,name,fptrns,fname)
    
def oneItemNB(patterns,dataset,name,fname):
    
    ptrns,fptrns = dividePat(patterns)
    
    options = ptrns[0]    

    colVal = dataset[options["name"]].values
    count = 0

    classes = dataset["class"].values

    cls = np.unique(classes).tolist()
        
    run1 = []
    labels = []
    
    for c in cls:
        run1.append([])
        labels.append(0)
    
    for indx in range(len(colVal)):
        cva = colVal[indx]
        cl = classes[indx]
        
        sw1 = switcher(cva,options)
        cin = cls.index(cl)
        run1[cin].append([count,cva])
        
        if(sw1[options["operator"]]):
            labels[cin] = labels[cin]+1
        
        count = count +1
    
    for indx in range(len(labels)):
        labels[indx] = labels[indx]/len(run1[indx])
    
    run1.append([float(options["value"])])
    runT1NB(run1,labels,name,fptrns,fname)

def parser(r_pattern):
    pat = r_pattern.split(" ")
    pattern = {"name": pat[0], "operator":pat[1], "value": pat[2]}
    return pattern
