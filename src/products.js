// Fictional clothing products. Prices in euro cents; demo stock is per size.
const rows = [
 ['everyday-tee','Everyday heavyweight tee','T-shirts',1800,'tee','sage','A clean everyday shape with a little extra weight. Made for lectures, coffee breaks and the long way home.','Relaxed fit · 100% cotton · 240 gsm'],
 ['classic-tee','Classic crew tee','T-shirts',1500,'tee','peach','The simple crew-neck you can reach for all week. Soft cotton and an easy regular fit.','Regular fit · 100% cotton · Crew neck'],
 ['stripe-tee','Weekend stripe tee','T-shirts',2200,'stripe','lilac','A subtle stripe and a comfortable silhouette for your weekend outfit.','Relaxed fit · Cotton jersey · Yarn-dyed stripe'],
 ['pocket-tee','Utility pocket tee','T-shirts',2000,'pocket','yellow','A familiar favourite with a chest pocket and soft, structured fabric.','Regular fit · Cotton jersey · Chest pocket'],
 ['longsleeve','Layering long-sleeve','T-shirts',2400,'longsleeve','sage','A soft base layer for cooler mornings, worn solo or under a jacket.','Regular fit · 100% cotton · Ribbed cuffs'],
 ['boxy-tee','Boxy studio tee','T-shirts',1900,'tee','lilac','A shorter, wider silhouette with dropped shoulders and an easy drape.','Boxy fit · 100% cotton · Dropped shoulder'],
 ['campus-hoodie','Campus heavyweight hoodie','Hoodies',4200,'hoodie','lilac','Your between-classes comfort layer, with a roomy hood and brushed inner.','Relaxed fit · Cotton blend · Kangaroo pocket'],
 ['zip-hoodie','Everyday zip hoodie','Hoodies',4500,'zip','sage','Throw it on, zip it up and head out. An easy layer for unpredictable days.','Regular fit · Cotton blend · Full zip'],
 ['fleece-hoodie','Soft fleece hoodie','Hoodies',3800,'hoodie','peach','Soft on the inside, simple on the outside. Your off-duty essential.','Relaxed fit · Brushed fleece · Drawstring hood'],
 ['oversized-hoodie','Oversized weekend hoodie','Hoodies',4600,'hoodie','yellow','Extra room for laid-back days, with a soft brushed finish.','Oversized fit · Cotton blend · Ribbed hem'],
 ['studio-hoodie','Studio cropped hoodie','Hoodies',3900,'zip','peach','A compact layer with a clean profile and comfortable cropped shape.','Cropped fit · Cotton blend · Full zip'],
 ['light-hoodie','Lightweight layer hoodie','Hoodies',3200,'hoodie','sage','A lighter everyday layer for in-between weather.','Regular fit · Loopback cotton · Lightweight'],
 ['coach-jacket','Everyday coach jacket','Jackets',5800,'jacket','sage','A simple outer layer with snap fastenings and room for your essentials.','Regular fit · Woven fabric · Two side pockets'],
 ['denim-jacket','Campus denim jacket','Jackets',6200,'jacket','lilac','A familiar classic with a modern relaxed fit. Ready to layer through the seasons.','Relaxed fit · Cotton denim · Button fastening'],
 ['overshirt','Workday overshirt','Jackets',4800,'jacket','peach','Part shirt, part jacket. A versatile mid-weight layer for your rotation.','Relaxed fit · Cotton twill · Chest pockets'],
 ['windbreaker','Packable windbreaker','Jackets',5200,'zip','yellow','A light outer layer for breezy walks across campus.','Regular fit · Lightweight shell · Zip fastening'],
 ['bomber','Minimal bomber jacket','Jackets',6800,'jacket','lilac','Clean lines and a comfortable shape for everyday outfits.','Regular fit · Woven shell · Ribbed cuffs'],
 ['fleece-jacket','Zip-through fleece jacket','Jackets',5400,'zip','sage','A cosy layer for colder campus days with roomy side pockets.','Relaxed fit · Fleece fabric · Full zip'],
];
export const sizes = ['XS','S','M','L','XL'];
export const products = rows.map(([id,name,category,price,art,tone,description,specs],i)=>({id,name,category,price,art,tone,description,specs,sizes:[...sizes],stock:i===10?0:10,featured:[0,6,12,13].includes(i)}));
export const categories = ['T-shirts','Hoodies','Jackets'];
export const findProduct = id => products.find(p=>p.id===id);
