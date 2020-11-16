# rever_test
En esta posible solucion se esta usando el metodo "watch" de mongodb para oir el evento "change"
que una vez emitido se inserta el log en ElasticSearch, esta seria le version 0.0.1 o el primer MVP pues se necesitaria poner un servicio de mensajeria para bajar la latencia y carga de trabajo a la aplicacion al tener que escuchar los eventos desde Mongodb y la carga de trabajo de tener que empujar los logs directamente a ElasticSearch. Una posible mejora seria usar Kafka o AWS Kinesis para aliviar la presion de la carga de trabajo sobre la app al tener que escuchar los eventos desde mongo y esperar a ES, 


    [APP] -insert/update/delete-> [MongoDB] -Listen Events "watch" producer -> [Kinesis] - Consumer Message Api request -> ElasticSearch 
