
# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket exportálni 
kell! Ez azt jelenti, hogy ha például írsz egy ilyen függvényt:
```javascript
const objectsMerge = () => {};
```
akkor utána ki kell így exportálni a fájlból:
```javascript
export default objectsMerge;
```
- A `js/01/objectsMerge.js` fájlban találsz egy kész mintát erre.
- (Egyenlőre ne légy kíváncsi arra hogy miért, később tanulni fogjuk :))))))

## 1. Feladat
- A `js/01/objectsMerge.js` fájlban dolgozz.
- Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot 
merge-öl össze, majd visszatér ezzel az objektummal!
- A függvény neve `objectsMerge` legyen!
Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2, stb.) amik tartalmazzák 
a részobjektumokat!  
Pl.: 

```javascript
    // A két objektum:
    const johnDoe = { 
        firstName: 'Jonh',
        lastName: 'Doe'
    };

    const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }

    // A végeredmény:
    {
        0: { 
            firstName: 'Jonh',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
```

## 2. Feladat
- A `js/02/taggedTemplate.js` fájlban dolgozz!
- Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, values értékeket úgy adja vissza egy strigben, hogy 
a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a html-be, tehát a megfelelő tagekkel kiegészített stinget adjon vissza!
- Például ebből `James` ez legyen `<strong>James</strong>`.
- A függnény neve `taggedTemplate` legyen!

## 3. Feladat
- A `js/03/concatArrays.js` fájlban dolgozz!
- Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik  stringeket tartalmaznak!  
- A függvény neve `concatArrays` legyen! 

A függvény:
   - összefűzi egy tömbbe az összes elemet,
   - eltávolítja az ismétlődő elemeket,
   - eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
   - eltávolítja a stringek végén lévő whitespace karaktert
   - visszaadja ezt az új tömböt.

## 3/b. 
- Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
- 1. függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
- 2. függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
- 3. függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt

**Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre!** 
**Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon!**