PGDMP     &    *            
    z            apartment_test    14.3    14.3 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18608    apartment_test    DATABASE     k   CREATE DATABASE apartment_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE apartment_test;
                postgres    false                        3079    18623 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    18616 
   apartments    TABLE     .  CREATE TABLE public.apartments (
    id integer NOT NULL,
    floor integer NOT NULL,
    pos_on_floor integer NOT NULL,
    price numeric NOT NULL,
    rooms integer NOT NULL,
    area_total real NOT NULL,
    area_kitchen real NOT NULL,
    area_live real NOT NULL,
    layout_image text NOT NULL
);
    DROP TABLE public.apartments;
       public         heap    postgres    false            �          0    18616 
   apartments 
   TABLE DATA                 public          postgres    false    210   �       g           2606    18622    apartments apartments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.apartments
    ADD CONSTRAINT apartments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.apartments DROP CONSTRAINT apartments_pkey;
       public            postgres    false    210            �   h  x����j�@�}�B�$`4g���UYJ
Mڭ�k"�Xƒ}��F���ċ1b	�����^?>=�|n֏�?���m;�ڽ=�oq7�]VM���a���a��6�g���Us���a��C�������Ӎ�5�Ng��o~�����{�/���������]5�ZC~�=c�����i�:���!>��8�ilC���{����y���1�|�a��AL$Q;m D�@[-��@@L���&��w/��_o֟��3ɪ f�������iq�Ԅ"���<K �fF�詤£�9P�<IO�L��| �H�<%E�UMy�LEx������eJ�I�9*u��M�	-��"^��*�$e����G�H��`��N#7����AR/�t�#eA_��(y��1=��������3%�)
Td�Fi��s�(z��W�k�E0W�"�J^��3%ϒ�4Wņ��2�ĉr�F���$U�UN�<6�;H!��%~E*�����RE��?�&� ��Y��9��MN_�j�,T�Jퟥ
+��*����97s���Y��BR���D��?K]Tj�,UL��?��R�����7Sퟅ����Ϲ�\ȵ�*sL��nn�9#�     