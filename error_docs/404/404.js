/**
 * This file is only for debugging
 * 
 * @author Henrik Steffens <development@th3ph4nt0m.de>
 */

const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}